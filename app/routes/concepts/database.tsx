import type { MetaFunction } from "react-router"
import { ConceptLayout } from "../../components/ConceptLayout"
import { CodeBlock } from "../../components/CodeBlock"

export const meta: MetaFunction = () => [
  { title: "Database Persistence | Concepts | Marty Bonacci" },
  {
    name: "description",
    content:
      "Database connections, CRUD operations, migrations, repository pattern, and SQL injection prevention across Laravel/MySQL and Drizzle/PostgreSQL.",
  },
]

export default function DatabasePage() {
  return (
    <ConceptLayout title="Database Persistence">
      <p>
        Most applications need to store data that survives a restart. Files work
        for simple cases, but once you need to search, filter, relate, and
        update structured data at scale, you need a database. This page walks
        through the core patterns of database persistence using real code from
        two projects: CustomCult2 (Laravel with MySQL and Eloquent ORM) and
        Tweeter (React Router v7 with Drizzle ORM and PostgreSQL).
      </p>
      <p>
        The syntax differs, but the ideas are the same everywhere: connect to a
        database, define your schema, perform CRUD operations through an
        abstraction layer, and never let user input anywhere near raw SQL.
      </p>

      {/* Section 1: Database Connection */}
      <h2>Database Connection</h2>
      <p>
        Before you can read or write anything, your application needs to know
        how to reach the database. Both projects use environment variables to
        keep credentials out of source code.
      </p>

      <h3>Laravel/MySQL (CustomCult2)</h3>
      <CodeBlock language="Bash" filename="customcult2/.env">
{`# customcult2/.env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=customcult_dev
DB_USERNAME=root
DB_PASSWORD=secret`}
      </CodeBlock>
      <p>
        Laravel uses environment variables for database configuration. The{" "}
        <code>.env</code> file stays out of version control — you use different
        values for dev, staging, and production. Laravel reads these values
        through its config system and handles the actual connection for you.
      </p>

      <h3>Drizzle ORM/PostgreSQL (Tweeter)</h3>
      <CodeBlock language="TypeScript" filename="tweeter-gdg-1/app/lib/db/connection.ts">
{`// tweeter-gdg-1/app/lib/db/connection.ts
import { drizzle } from 'drizzle-orm/node-postgres';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error('DATABASE_URL environment variable is required');
}

export const db = drizzle(connectionString);`}
      </CodeBlock>
      <p>
        Same idea, different syntax. One connection string instead of separate
        fields. The <code>drizzle()</code> function creates a database client
        you import wherever you need it. If the environment variable is missing,
        the app fails fast with a clear error instead of silently breaking later.
      </p>

      {/* Section 2: Database Initialization (Migrations) */}
      <h2>Database Initialization (Migrations)</h2>
      <p>
        You need a way to define your database tables in code so the structure
        is versioned, repeatable, and shared across every developer's machine.
        That is what migrations and schema definitions are for.
      </p>

      <h3>Laravel Migrations (CustomCult2)</h3>
      <CodeBlock language="PHP" filename="customcult2/database/migrations/...create_designers_table.php">
{`// customcult2/database/migrations/2018_10_06_031033_create_designers_table.php
Schema::create('designers', function (Blueprint $table) {
    $table->uuid('uuid');
    $table->string('first_name');
    $table->string('last_name');
    $table->string('avatar_image');
    $table->float('height_in_mm');
    $table->float('us_mens_boot_size');
    $table->unsignedInteger('weight_in_pounds');
    $table->string('goofy_or_regular');
    $table->timestamps();
});`}
      </CodeBlock>

      <h3>Drizzle Schema (Tweeter)</h3>
      <CodeBlock language="TypeScript" filename="tweeter-gdg-1/app/lib/db/schema.ts">
{`// tweeter-gdg-1/app/lib/db/schema.ts
import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const profiles = pgTable('profiles', {
    id: uuid('id').primaryKey().defaultRandom(),
    username: text('username').notNull().unique(),
    displayName: text('display_name').notNull(),
    avatarUrl: text('avatar_url'),
    bio: text('bio'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const tweets = pgTable('tweets', {
    id: uuid('id').primaryKey().defaultRandom(),
    content: text('content').notNull(),
    profileId: uuid('profile_id').references(() => profiles.id).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});`}
      </CodeBlock>
      <p>
        Both approaches define the database structure in code rather than raw
        SQL. Laravel uses migration files with a fluent API — you call methods
        like <code>$table-&gt;string()</code> and{" "}
        <code>$table-&gt;uuid()</code> to describe columns. Drizzle uses
        TypeScript objects that double as both schema definition AND type source.
        The Drizzle approach means your TypeScript types stay in sync with your
        database automatically — if you change a column, your types update and
        the compiler catches every place that needs to change.
      </p>

      {/* Section 3: CRUD Operations */}
      <h2>CRUD Operations</h2>
      <p>
        CRUD stands for Create, Read, Update, Delete — the four fundamental
        operations you perform on any database record. Let us look at how both
        projects handle each one.
      </p>

      <h3>Create</h3>
      <p><strong>CustomCult2 (Laravel/Eloquent):</strong></p>
      <CodeBlock language="PHP" filename="customcult2/app/Http/Controllers/SavedController.php">
{`// customcult2/app/Http/Controllers/SavedController.php
$saved = Saved::create([
    'designFactors' => json_encode($request->input('designfactors')),
    'savedBySharing' => $request->input('savedBySharing'),
    'savedByAddingToCart' => $request->input('savedByAddingToCart'),
    'lastShareDate' => $shareDate,
]);`}
      </CodeBlock>

      <p><strong>Tweeter (Drizzle ORM):</strong></p>
      <CodeBlock language="TypeScript" filename="tweeter-gdg-1/app/models/tweet/tweet.model.ts">
{`// tweeter-gdg-1/app/models/tweet/tweet.model.ts
const [tweet] = await db
    .insert(tweets)
    .values({ content: validated.content, profileId: userId })
    .returning();`}
      </CodeBlock>

      <h3>Read</h3>
      <p><strong>CustomCult2 (Laravel/Eloquent):</strong></p>
      <CodeBlock language="PHP">
{`$saved = Saved::findOrFail($decodedId);
$ridingTypes = RidingType::where('riding_types.uuid', '=', $request->ridingTypeId)->first();`}
      </CodeBlock>

      <p><strong>Tweeter (Drizzle ORM):</strong></p>
      <CodeBlock language="TypeScript">
{`const results = await db
    .select({ id: tweets.id, content: tweets.content, createdAt: tweets.createdAt })
    .from(tweets)
    .innerJoin(profiles, eq(tweets.profileId, profiles.id))
    .orderBy(desc(tweets.createdAt))
    .limit(limit).offset(offset);`}
      </CodeBlock>

      <h3>Update</h3>
      <p><strong>CustomCult2 (Laravel/Eloquent):</strong></p>
      <CodeBlock language="PHP">
{`Saved::where('id', '=', $decodedId)->update([
    'payPalOrderData' => json_encode($request->input()),
    'lastSaleDate' => new \\DateTime(),
    'sales' => 1,
]);`}
      </CodeBlock>

      <p><strong>Tweeter (Drizzle ORM):</strong></p>
      <CodeBlock language="TypeScript">
{`const results = await db
    .update(profiles)
    .set(updateData)
    .where(eq(profiles.id, userId))
    .returning({ id: profiles.id, username: profiles.username });`}
      </CodeBlock>

      <h3>Delete</h3>
      <p><strong>Tweeter (Drizzle ORM):</strong></p>
      <CodeBlock language="TypeScript">
{`await db.delete(tweets).where(eq(tweets.id, tweetId));`}
      </CodeBlock>

      {/* Section 4: Repository Pattern */}
      <h2>Repository Pattern</h2>
      <p>
        The repository pattern puts a layer between your application logic and
        the database. Controllers and route handlers never write SQL directly —
        they call functions like <code>createTweet()</code> or{" "}
        <code>Saved::findOrFail()</code>. This keeps your codebase organized
        and makes it possible to swap databases without rewriting your entire
        application.
      </p>

      <h3>CustomCult2: Eloquent Models as the Repository Layer</h3>
      <p>
        In Laravel, Eloquent models like <code>Designer.php</code>,{" "}
        <code>Saved.php</code>, and <code>User.php</code> act as the
        repository layer. Controllers call model methods and never touch raw
        SQL.
      </p>
      <CodeBlock language="PHP">
{`// Controllers call model methods, never raw SQL
$saved = Saved::create([...]);           // Create
$saved = Saved::findOrFail($id);         // Read
Saved::where('id', $id)->update([...]);  // Update
$types = RidingType::where('uuid', '=', $uuid)->first();  // Query`}
      </CodeBlock>

      <h3>Tweeter: Dedicated Model Files</h3>
      <p>
        Tweeter takes this a step further with dedicated model files that export
        focused functions for each domain.
      </p>
      <CodeBlock language="TypeScript">
{`// tweeter-gdg-1/app/models/tweet/tweet.model.ts
export async function createTweet(userId: string, content: string) { ... }
export async function getFeed(limit: number, offset: number) { ... }
export async function getTweetsByUserId(userId: string) { ... }
export async function deleteTweet(tweetId: string) { ... }

// tweeter-gdg-1/app/models/like/like.model.ts
export async function toggleLike(userId: string, tweetId: string) { ... }
export async function getLikeCount(tweetId: string) { ... }
export async function isLikedByUser(userId: string, tweetId: string) { ... }

// tweeter-gdg-1/app/models/user/user.model.ts
export async function getUserById(id: string) { ... }
export async function getUserByUsername(username: string) { ... }
export async function updateProfile(userId: string, data: Partial<Profile>) { ... }`}
      </CodeBlock>
      <p>
        API handlers import these functions and call <code>createTweet()</code>{" "}
        without knowing anything about Drizzle or PostgreSQL. If you swap the
        database, you only change these model files — every route handler that
        imports them keeps working without a single edit.
      </p>

      {/* Section 5: SQL Injection */}
      <h2>SQL Injection</h2>
      <p>
        SQL injection is one of the oldest and most dangerous web
        vulnerabilities. It happens when user input gets concatenated directly
        into a SQL string, allowing an attacker to run arbitrary queries
        against your database.
      </p>

      <h3>Vulnerable (DO NOT DO THIS)</h3>
      <CodeBlock language="JavaScript">
{`// DANGEROUS — SQL injection vulnerable
const result = await db.execute(
    \`SELECT * FROM users WHERE id = '\${userId}'\`
);
// If userId = "'; DROP TABLE users; --" ... goodbye data`}
      </CodeBlock>

      <h3>Protected — Laravel</h3>
      <CodeBlock language="PHP">
{`// Eloquent automatically parameterizes all where() clauses
$ridingTypes = RidingType::where('riding_types.uuid', '=', $request->ridingTypeId)->first();
// The value is NEVER interpolated into the SQL string`}
      </CodeBlock>

      <h3>Protected — Drizzle ORM</h3>
      <CodeBlock language="TypeScript">
{`// Drizzle ORM generates parameterized queries automatically
const results = await db.select().from(tweets).where(eq(tweets.id, tweetId));
// eq() creates a parameterized comparison — the value is sent separately from the SQL`}
      </CodeBlock>
      <p>
        ORMs prevent SQL injection by never letting user input touch the SQL
        string. The query and the values are sent to the database separately —
        the database engine treats them as data, not as executable code. This
        is one of the strongest reasons to use an ORM instead of writing raw
        SQL. You get protection by default, not by remembering to sanitize
        every input.
      </p>

      {/* Section 6: Why Use a Repository/Adapter */}
      <h2>Why Use a Repository/Adapter</h2>
      <p>
        You might be wondering why we bother with all these layers. Why not
        just write database queries directly in your route handlers? Here are
        the practical benefits.
      </p>
      <p>
        <strong>Separation of concerns</strong> — your API handlers focus on
        request/response logic (parsing input, returning JSON, handling HTTP
        status codes), while your models focus on data access. Each layer has
        one job and does it well.
      </p>
      <p>
        <strong>Testability</strong> — you can mock the repository layer for
        unit tests without spinning up a real database. Want to test that your
        route handler returns a 404 when a tweet is not found? Mock{" "}
        <code>getTweetById()</code> to return null and verify the response.
        No PostgreSQL required.
      </p>
      <p>
        <strong>Single point of change</strong> — if you switch from MySQL to
        PostgreSQL, or from Eloquent to Drizzle, you change ONE layer. The
        rest of your application never knows the difference because it only
        talks to the repository functions, not to the database directly.
      </p>
      <p>
        <strong>No scattered SQL</strong> — every database query lives in a
        model file, not sprinkled across 50 route handlers. When you need to
        optimize a query or fix a bug in how data is fetched, you know exactly
        where to look.
      </p>
      <p>
        Tweeter's model layer is a clean example of this in action. The API
        route handlers only call functions like <code>createTweet()</code>,{" "}
        <code>getFeed()</code>, and <code>toggleLike()</code>. They have no
        idea that Drizzle ORM exists, that the database is PostgreSQL, or what
        the SQL looks like. That is the power of a well-designed repository
        layer.
      </p>
    </ConceptLayout>
  )
}
