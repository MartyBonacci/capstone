import type { MetaFunction } from "react-router"
import { ConceptLayout } from "../../components/ConceptLayout"
import { CodeBlock } from "../../components/CodeBlock"

export const meta: MetaFunction = () => [
  { title: "File Persistence | Concepts | Marty Bonacci" },
  {
    name: "description",
    content:
      "File operations in real applications - reading, writing, image processing, and data format handling with PHP and JavaScript.",
  },
]

export default function FilePersistencePage() {
  return (
    <ConceptLayout title="File Persistence">
      <p>
        File persistence is one of those topics that sounds dry until you see it
        in a real application. Reading and writing files is not just about text
        documents — it is about image uploads, cloud storage pipelines, data
        serialization, and everything in between. We will walk through real code
        from CustomCult2, a snowboard design platform built with Laravel and
        React, to see how file operations work in practice.
      </p>

      {/* Section 1: Getting a Filename from the User */}
      <h2>Getting a filename from the user</h2>
      <p>
        Before you can do anything with a file, you need the user to pick one.
        On the web, this starts with a file input element. The browser handles
        the entire file picker dialog for you — your job is just to wire up the
        response.
      </p>

      <CodeBlock
        language="JSX"
        filename="customcult2/resources/js/components/uploader/uploader.jsx"
      >
{`<input
    type="file"
    id="topGraphicInput"
    accept=".jpg, .jpeg, .svg"
    onChange={(e) => {
        queueTopGraphic(e.target.files[0]);
        e.target.value = '';
    }}
/>`}
      </CodeBlock>

      <p>
        The <code>accept</code> attribute limits which file types the picker
        shows — in this case, JPEGs and SVGs, which are the formats CustomCult
        supports for board graphics. When the user selects a file,{" "}
        <code>onChange</code> fires and <code>e.target.files[0]</code> gives you
        the File object. That is a browser API object containing the file's
        name, size, type, and the actual binary data. The line{" "}
        <code>e.target.value = ''</code> resets the input so the user can select
        the same file again if they want to — without that reset, selecting the
        same file a second time would not trigger <code>onChange</code>.
      </p>

      {/* Section 2: Opening and Writing Files */}
      <h2>Opening and writing files</h2>
      <p>
        Once the file arrives at the server, the real work begins. In
        CustomCult2, uploaded board graphics go through a multi-step pipeline:
        save the original, process it with ImageMagick, write the processed
        version locally, then push it to cloud storage. Here is the controller
        that handles all of that.
      </p>

      <CodeBlock
        language="PHP"
        filename="customcult2/app/Http/Controllers/GraphicController.php"
      >
{`public function store(Request $request)
{
    $file = $request->file('file');
    $original = file_get_contents($file);

    // Save the original upload to local filesystem
    $file->move($destinationPath, $graphicFileNameOriginal);

    // Process with Imagick
    $im = new \\Imagick();
    $im->readImageBlob($original);

    // ... resize, crop, overlay (see image processing section) ...

    // Write processed image to local filesystem
    $im->writeImage("$destinationPath/$graphicFileName");

    // Upload to cloud storage (DigitalOcean Spaces / S3-compatible)
    Storage::disk('do')->put($graphicFileName, $im->getImageBlob());
}`}
      </CodeBlock>

      <p>
        This pipeline shows the full journey of a file through a real
        application. First, <code>file_get_contents()</code> reads the raw
        upload into memory. Then <code>$file-&gt;move()</code> saves the
        original to the local filesystem — you always want to keep the original
        in case you need to reprocess later. Imagick handles the image
        manipulation (resizing, cropping, compositing overlays), and{" "}
        <code>writeImage()</code> saves the processed version locally. Finally,
        Laravel's <code>Storage</code> facade pushes the processed image to
        DigitalOcean Spaces, which is S3-compatible cloud storage. That is
        multiple write operations in a single flow — local original, local
        processed, and cloud copy.
      </p>

      {/* Section 3: Opening and Reading Files */}
      <h2>Opening and reading files</h2>
      <p>
        Writing is only half the story. The same controller also reads files —
        both the uploaded image and overlay graphics that get composited onto
        the board design.
      </p>

      <CodeBlock
        language="PHP"
        filename="customcult2/app/Http/Controllers/GraphicController.php"
      >
{`// Reading file contents for processing
$original = file_get_contents("$destinationPath/$graphicFileNameOriginal");

// Reading an overlay image to composite onto the board graphic
$overlayContents = file_get_contents("$overlayPath");

// Reading into Imagick for image manipulation
$im = new \\Imagick();
$im->readImageBlob($original);

$overlay = new \\Imagick();
$overlay->readImageBlob($overlayContents);`}
      </CodeBlock>

      <p>
        <code>file_get_contents()</code> reads an entire file into a string — or
        in the case of images, a binary blob. It is PHP's workhorse for simple
        file reading. Imagick's <code>readImageBlob()</code> takes that raw data
        and creates an image object you can manipulate — resize, crop, composite
        layers together, adjust colors, whatever you need. Reading is the mirror
        of writing. You need both sides of the pipeline, and in a real
        application like CustomCult2, you are often reading multiple files to
        combine them into a single output.
      </p>

      {/* Section 4: Data Formats */}
      <h2>Data formats</h2>
      <p>
        Files are not just images. A huge part of persistence is choosing the
        right data format for structured information. In CustomCult2, the
        primary format is JSON — and it shows up everywhere, from the database
        schema to the API responses.
      </p>

      <CodeBlock
        language="PHP"
        filename="customcult2/database/migrations/...create_board_designs_table.php"
      >
{`Schema::create('board_designs', function (Blueprint $table) {
    $table->increments('id');
    $table->json('body');    // {"bootSize":"10","height":"1765.3","weight":"155","abilityLevel":"0.95"}
    $table->json('board');   // {"totalLength":1530,"noseLength":160,"effectiveEdge":1210,...}
    $table->timestamps();
});`}
      </CodeBlock>

      <p>
        Notice those <code>json</code> columns. Instead of creating separate
        columns for every board dimension, the migration stores the entire
        design as a JSON object. This is a deliberate choice — board designs
        have dozens of measurements that vary by model, and a rigid column
        structure would be painful to maintain. JSON gives you flexibility while
        still living inside a relational database.
      </p>

      <CodeBlock
        language="PHP"
        filename="customcult2/app/Http/Controllers/SavedController.php"
      >
{`// Writing JSON to the database
$saved = Saved::create([
    'designFactors' => json_encode($request->input('designfactors')),
    // The front end sends JSON, the backend stores it as JSON
]);`}
      </CodeBlock>

      <p>
        The front end sends JSON from the React app, the backend receives it,
        encodes it with <code>json_encode()</code>, and stores it in the
        database. When you read it back out, <code>json_decode()</code> turns it
        back into a PHP array or object. The data stays in the same format
        through the entire stack — JavaScript object to JSON string to database
        column and back again.
      </p>

      <p>
        JSON is the dominant format in web development, but it is not the only
        one. Here are the formats you will encounter:
      </p>

      <ul>
        <li>
          <strong>Plain text</strong> — config files, logs. Simple but no
          structure. You parse it yourself or read it line by line.
        </li>
        <li>
          <strong>CSV</strong> — tabular data, spreadsheet-compatible. Good for
          exports and data interchange with non-technical users, but terrible for
          nested data. If your data has hierarchy, CSV will fight you.
        </li>
        <li>
          <strong>XML</strong> — legacy data exchange and configuration. Verbose
          but self-documenting with its tag structure. Still widely used in
          enterprise systems, SOAP APIs, and configuration files like Android
          manifests and Maven builds.
        </li>
        <li>
          <strong>JSON</strong> — the dominant format for web APIs and modern
          applications. This is what CustomCult uses everywhere. Lightweight,
          human-readable, and maps directly to JavaScript objects. This is what
          you will use 90% of the time in web development.
        </li>
      </ul>

      <h2>Wrapping up</h2>
      <p>
        File persistence in a real application is rarely just "open file, write
        string, close file." In CustomCult2, a single upload triggers a pipeline
        that touches the local filesystem, an image processing library, and
        cloud storage. Data gets serialized to JSON, stored in database columns,
        and deserialized back on the other side. The fundamentals are simple —
        read bytes, write bytes — but the patterns you build on top of them are
        where the real engineering happens.
      </p>
    </ConceptLayout>
  )
}
