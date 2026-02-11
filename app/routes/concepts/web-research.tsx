import type { MetaFunction } from "react-router"
import { ConceptLayout } from "../../components/ConceptLayout"
import { CodeBlock } from "../../components/CodeBlock"

export const meta: MetaFunction = () => [
  { title: "Web Research | Concepts | Marty Bonacci" },
  {
    name: "description",
    content:
      "Three real examples of solving hard problems through web research - UV texture mapping, image processing pipelines, and custom API routing.",
  },
]

export default function WebResearchPage() {
  return (
    <ConceptLayout title="Web Research">
      <p>
        These are not hypothetical exercises. Each example is a real problem I
        hit during development, could not find a complete solution for, and had
        to piece together through research. The pattern is always the same:
        problem, research, solution.
      </p>

      {/* Example 1: Three.js UV Texture Mapping */}
      <h2>Three.js UV Texture Mapping on Snowboard Mesh</h2>

      <h3>The Problem</h3>
      <p>
        CustomCult needed to display user-uploaded images on 3D snowboard
        geometry in the browser. The snowboard is not a flat rectangle — it is a
        curved, tapered shape with nose upturn, tail upturn, and sidecut. A flat
        image needed to be mapped onto this irregular triangulated mesh. Two
        Three.js experts were hired and could not solve it. I spent 2 months
        researching.
      </p>

      <h3>The Research</h3>
      <p>
        Three.js documentation on BufferGeometry, UV mapping tutorials, texture
        coordinate systems, computational geometry for mapping 2D images onto 3D
        surfaces.
      </p>

      <h3>The Solution</h3>
      <p>
        First, calculating graphic dimensions based on board geometry:
      </p>

      <CodeBlock
        language="JavaScript"
        filename="customcult2/resources/js/pages/landing/threecode.js"
      >
{`// Lines ~111-177: Calculate graphic scaling from board dimensions
function creategeometry(boardData, topGraphicUrl) {
    const lengthOfGraphic = boardData.totalLength - boardData.noseLength - boardData.tailLength;
    const widthOfGraphic = boardData.waistWidth + 20;  // slight bleed
    const yGraphicCenterAdj = lengthOfGraphic / 2;
    // These values ensure the texture scales correctly
    // regardless of board length or width
}`}
      </CodeBlock>

      <p>
        The UV mapping core — each triangle vertex gets normalized texture
        coordinates:
      </p>

      <CodeBlock
        language="JavaScript"
        filename="customcult2/resources/js/pages/landing/threecode.js"
      >
{`// Lines ~338-391: Map each vertex to a texture coordinate (0-1 range)
// For each quad (2 triangles), calculate UV coordinates
topUVsArray[i * 12]     = (topArray[i].x + maxX) / widthOfGraphic;
topUVsArray[i * 12 + 1] = (topArray[i].y + yGraphicCenterAdj) / lengthOfGraphic;

topUVsArray[i * 12 + 2] = (topArray[i + 1].x + maxX) / widthOfGraphic;
topUVsArray[i * 12 + 3] = (topArray[i + 1].y + yGraphicCenterAdj) / lengthOfGraphic;

topUVsArray[i * 12 + 4] = (nextTopArray[i].x + maxX) / widthOfGraphic;
topUVsArray[i * 12 + 5] = (nextTopArray[i].y + yGraphicCenterAdj) / lengthOfGraphic;

// Second triangle of the quad
topUVsArray[i * 12 + 6] = (topArray[i + 1].x + maxX) / widthOfGraphic;
topUVsArray[i * 12 + 7] = (topArray[i + 1].y + yGraphicCenterAdj) / lengthOfGraphic;

topUVsArray[i * 12 + 8] = (nextTopArray[i + 1].x + maxX) / widthOfGraphic;
topUVsArray[i * 12 + 9] = (nextTopArray[i + 1].y + yGraphicCenterAdj) / lengthOfGraphic;

topUVsArray[i * 12 + 10] = (nextTopArray[i].x + maxX) / widthOfGraphic;
topUVsArray[i * 12 + 11] = (nextTopArray[i].y + yGraphicCenterAdj) / lengthOfGraphic;`}
      </CodeBlock>

      <p>
        Attaching UV attributes and creating the material:
      </p>

      <CodeBlock
        language="JavaScript"
        filename="customcult2/resources/js/pages/landing/threecode.js"
      >
{`// Lines ~483-488: Attach UV coordinates to the geometry
topGeometry.setAttribute('position', new THREE.BufferAttribute(top, 3));
topGeometry.setAttribute('uv', new THREE.BufferAttribute(topUVs, 2));

// Lines ~711-725: Material with texture mapping
let topMaterial = new THREE.MeshPhongMaterial({
    map: topTexture,
    shininess: 100,
    side: THREE.BackSide,  // BackSide because the top surface wraps around
});`}
      </CodeBlock>

      <p>
        <strong>Key insight:</strong> The solution dynamically scales UV
        coordinates based on the board's actual dimensions, so the same graphic
        correctly displays on any board length or width. UV coordinates are
        normalized to 0-1 range relative to the graphic dimensions, not the
        geometry dimensions.
      </p>

      {/* Example 2: Image Processing Pipeline */}
      <h2>Image Processing Pipeline with Imagick</h2>

      <h3>The Problem</h3>
      <p>
        When users upload photos to use as snowboard graphics, the images come
        in all sizes, orientations (phone photos rotated via EXIF), and aspect
        ratios. CustomCult needs them in exactly 512x2048 pixels with the
        CustomCult logo overlaid, stored both locally and on DigitalOcean
        Spaces.
      </p>

      <h3>The Research</h3>
      <p>
        PHP Imagick documentation, EXIF orientation handling, image composition
        techniques, S3-compatible storage APIs, aspect ratio scaling algorithms.
      </p>

      <h3>The Solution</h3>
      <p>
        Auto-rotation based on EXIF data:
      </p>

      <CodeBlock
        language="PHP"
        filename="customcult2/app/Http/Controllers/GraphicController.php"
      >
{`$orientation = $image->getImageOrientation();
switch($orientation) {
    case \\Imagick::ORIENTATION_BOTTOMRIGHT:
        $image->rotateimage("#000", 180);
        break;
    case \\Imagick::ORIENTATION_RIGHTTOP:
        $image->rotateimage("#000", 90);
        break;
    case \\Imagick::ORIENTATION_LEFTBOTTOM:
        $image->rotateimage("#000", -90);
        break;
}
$image->setImageOrientation(\\Imagick::ORIENTATION_TOPLEFT);`}
      </CodeBlock>

      <p>
        Aspect-ratio-aware scaling and cropping:
      </p>

      <CodeBlock
        language="PHP"
        filename="customcult2/app/Http/Controllers/GraphicController.php"
      >
{`// Scale to fit 512x2048 while preserving aspect ratio, then crop
if ($width / $height > 512 / 2048) {
    // Image is wider than target ratio — scale by height, crop width
    $newHeight = 2048;
    $newWidth = round(2048 * $width / $height);
    $xOffset = (($newWidth - 512) / 2);
    $yOffset = 0;
} else {
    // Image is taller than target ratio — scale by width, crop height
    $newWidth = 512;
    $newHeight = round(512 * $height / $width);
    $xOffset = 0;
    $yOffset = ($newHeight - 2048) / 2;
}
$im->resizeImage($newWidth, $newHeight, \\Imagick::FILTER_LANCZOS, .9, true);
$im->cropImage(512, 2048, $xOffset, $yOffset);`}
      </CodeBlock>

      <p>
        Logo overlay and dual storage:
      </p>

      <CodeBlock
        language="PHP"
        filename="customcult2/app/Http/Controllers/GraphicController.php"
      >
{`// Composite the CustomCult logo onto the processed image
$overlay = new \\Imagick();
$overlay->readImageBlob(file_get_contents($overlayPath));
$im->compositeImage($overlay, \\Imagick::COMPOSITE_DEFAULT, 206, 1700);

// Store locally AND in the cloud
$im->writeImage("$destinationPath/$graphicFileName");
Storage::disk('do')->put($graphicFileName, $im->getImageBlob());`}
      </CodeBlock>

      <p>
        This pipeline handles every edge case — rotated phone photos, weird
        aspect ratios, branding requirements, and multi-location storage. Each
        piece was a separate research problem.
      </p>

      {/* Example 3: Framework-Agnostic API Router */}
      <h2>Building a Framework-Agnostic API Router</h2>

      <h3>The Problem</h3>
      <p>
        Tweeter needed a REST API but React Router v7 does not have traditional
        Express-like routing for API endpoints. The team needed a way to define
        API routes with path parameters (<code>:userId</code>,{" "}
        <code>:tweetId</code>), match HTTP methods, and dispatch to handler
        functions — all running inside React Router's loader/action system.
      </p>

      <h3>The Research</h3>
      <p>
        Express.js routing internals, path-to-regexp library patterns, React
        Router v7 catch-all routes, programmatic route matching algorithms.
      </p>

      <h3>The Solution</h3>
      <p>
        Central route registry:
      </p>

      <CodeBlock
        language="TypeScript"
        filename="tweeter-gdg-1/app/api/router.ts"
      >
{`export const apiRoutes: ApiRoute[] = [
    { method: 'POST',   path: '/api/tweets',            handler: tweetHandlers.handleCreateTweet },
    { method: 'GET',    path: '/api/tweets',            handler: tweetHandlers.handleGetFeed },
    { method: 'DELETE', path: '/api/tweets/:tweetId',   handler: tweetHandlers.handleDeleteTweet },
    { method: 'POST',   path: '/api/likes/:tweetId',   handler: likeHandlers.handleToggleLike },
    { method: 'GET',    path: '/api/users/:username',   handler: userHandlers.handleGetProfile },
    { method: 'PUT',    path: '/api/users/:userId',     handler: userHandlers.handleUpdateProfile },
];`}
      </CodeBlock>

      <p>
        Custom route matching with parameter extraction:
      </p>

      <CodeBlock
        language="TypeScript"
        filename="tweeter-gdg-1/app/api/router.ts"
      >
{`function matchRoute(pattern: string, path: string): string[] | null {
    const patternParts = pattern.split('/');
    const pathParts = path.split('/');
    if (patternParts.length !== pathParts.length) return null;

    const params: string[] = [];
    for (let i = 0; i < patternParts.length; i++) {
        if (patternParts[i].startsWith(':')) {
            params.push(pathParts[i]);  // Dynamic parameter
        } else if (patternParts[i] !== pathParts[i]) {
            return null;  // Static part doesn't match
        }
    }
    return params;
}`}
      </CodeBlock>

      <p>
        The catch-all bridge:
      </p>

      <CodeBlock
        language="TypeScript"
        filename="tweeter-gdg-1/app/routes/api/$.tsx"
      >
{`// This catch-all React Router route bridges to our custom API router
export async function action({ request }: ActionFunctionArgs) {
    const path = new URL(request.url).pathname;
    const match = findRoute(request.method, path);
    if (!match) return Response.json({ error: 'Not found' }, { status: 404 });
    return await match.route.handler(request, ...match.params);
}

export async function loader({ request }: LoaderFunctionArgs) {
    const path = new URL(request.url).pathname;
    const match = findRoute('GET', path);
    if (!match) return Response.json({ error: 'Not found' }, { status: 404 });
    return await match.route.handler(request, ...match.params);
}`}
      </CodeBlock>

      <p>
        This custom router gives us Express-like developer experience inside
        React Router v7. Define routes declaratively, extract path parameters
        automatically, dispatch to clean handler functions. The catch-all{" "}
        <code>$.tsx</code> route captures everything under{" "}
        <code>/api/*</code> and delegates to our matching logic.
      </p>
    </ConceptLayout>
  )
}
