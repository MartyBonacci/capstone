import type { MetaFunction } from "react-router"
import { ConceptLayout } from "../../components/ConceptLayout"
import { CodeBlock } from "../../components/CodeBlock"

export const meta: MetaFunction = () => [
  { title: "Inheritance & Polymorphism | Concepts | Marty Bonacci" },
  {
    name: "description",
    content:
      "Inheritance, method overriding, polymorphism, and SOLID principles demonstrated with TypeScript snowboard type hierarchy.",
  },
]

export default function InheritancePage() {
  return (
    <ConceptLayout title="Inheritance & Polymorphism">
      {/* ---- Section 1: What is Inheritance? ---- */}
      <h2>What is Inheritance?</h2>
      <p>
        Inheritance is one of the core pillars of object-oriented programming. The idea
        is straightforward: a class can <strong>extend</strong> another class, inheriting
        all of its properties and methods. The child class <em>is-a</em> parent class,
        but it can specialize behavior to suit its own needs.
      </p>
      <p>
        Think of it like snowboards. Every snowboard has a length, a width, a sidecut
        radius, and a flex rating. Those are universal. But an all-mountain board, a
        halfpipe board, a boardercross board, and a powder board each behave differently
        when you calculate things like effective edge length. Inheritance lets us model
        that shared foundation while allowing each board type to define what makes it
        unique.
      </p>

      {/* ---- Section 2: Extending a Base Class ---- */}
      <h2>Extending a Base Class</h2>
      <p>
        We start with a base <code>Snowboard</code> class that captures the properties
        every snowboard shares. Then we extend it to create specialized board types.
      </p>

      <CodeBlock language="TypeScript" filename="Snowboard.ts">
{`class Snowboard {
  length: number
  width: number
  sidecut: number
  flex: number

  constructor(length: number, width: number, sidecut: number, flex: number) {
    this.length = length
    this.width = width
    this.sidecut = sidecut
    this.flex = flex
  }

  calculateEffectiveEdge(): number {
    return this.length - 2 * this.sidecut
  }
}

class AllMountainBoard extends Snowboard {
  // Inherits everything from Snowboard.
  // No overrides needed — the base calculation works for all-mountain riding.
}

const myBoard = new AllMountainBoard(158, 25.5, 8, 6)
console.log(myBoard.length)                  // 158
console.log(myBoard.calculateEffectiveEdge()) // 142`}
      </CodeBlock>

      <p>
        Notice that <code>AllMountainBoard</code> doesn't define a single property or
        method of its own. It inherits <code>length</code>, <code>width</code>,{" "}
        <code>sidecut</code>, <code>flex</code>, and{" "}
        <code>calculateEffectiveEdge()</code> directly from <code>Snowboard</code>. The
        child automatically gets everything the parent has.
      </p>

      {/* ---- Section 3: Calling the Base Constructor ---- */}
      <h2>Calling the Base Constructor</h2>
      <p>
        When a child class has its own constructor, it <strong>must</strong> call{" "}
        <code>super()</code> to initialize the parent class first. This is how the
        parent's properties get set up. A child can also add its own properties on top
        of what the parent provides.
      </p>

      <CodeBlock language="TypeScript" filename="HalfpipeBoard.ts">
{`class HalfpipeBoard extends Snowboard {
  wallHeight: number

  constructor(
    length: number,
    width: number,
    sidecut: number,
    flex: number,
    wallHeight: number
  ) {
    // Initialize the parent class properties first
    super(length, width, sidecut, flex)

    // Then set child-specific properties
    this.wallHeight = wallHeight
  }

  calculateEffectiveEdge(): number {
    // Halfpipe boards need a shorter effective edge
    // for quick transitions between walls
    return this.length - 2 * this.sidecut - 2
  }
}

const pipeBoard = new HalfpipeBoard(152, 24.8, 7.5, 4, 22)
console.log(pipeBoard.length)     // 152 (inherited from Snowboard)
console.log(pipeBoard.wallHeight) // 22  (HalfpipeBoard-specific)`}
      </CodeBlock>

      <p>
        The <code>super()</code> call hands the shared properties up to{" "}
        <code>Snowboard</code>'s constructor. After that completes, the child is free
        to set up its own state. If you forget <code>super()</code>, TypeScript will
        give you a compile error — it enforces this rule strictly.
      </p>

      {/* ---- Section 4: Method Overriding ---- */}
      <h2>Method Overriding</h2>
      <p>
        This is where inheritance gets interesting. Each board type can{" "}
        <strong>override</strong> the parent's <code>calculateEffectiveEdge()</code>{" "}
        method to provide its own formula. The method signature stays the same, but the
        behavior changes.
      </p>

      <CodeBlock language="TypeScript" filename="BoardTypes.ts">
{`class Snowboard {
  length: number
  width: number
  sidecut: number
  flex: number

  constructor(length: number, width: number, sidecut: number, flex: number) {
    this.length = length
    this.width = width
    this.sidecut = sidecut
    this.flex = flex
  }

  calculateEffectiveEdge(): number {
    return this.length - 2 * this.sidecut
  }
}

class AllMountainBoard extends Snowboard {
  // Standard calculation — no override needed
}

class HalfpipeBoard extends Snowboard {
  wallHeight: number

  constructor(
    length: number, width: number, sidecut: number,
    flex: number, wallHeight: number
  ) {
    super(length, width, sidecut, flex)
    this.wallHeight = wallHeight
  }

  calculateEffectiveEdge(): number {
    // Subtract extra 2cm — halfpipe riding demands quick edge-to-edge
    // transitions, so a shorter effective edge improves maneuverability
    return this.length - 2 * this.sidecut - 2
  }
}

class BoardercrossBoard extends Snowboard {
  calculateEffectiveEdge(): number {
    // Add 1cm — boardercross needs maximum edge hold at high speed
    // through banked turns, so a longer effective edge adds stability
    return this.length - 2 * this.sidecut + 1
  }
}

class PowderBoard extends Snowboard {
  calculateEffectiveEdge(): number {
    // Subtract 5cm — powder boards have a setback stance and tapered
    // shape, so much less edge actually contacts the snow, prioritizing
    // float and maneuverability in deep snow
    return this.length - 2 * this.sidecut - 5
  }
}`}
      </CodeBlock>

      <p>
        Each class provides its own version of the same method. The formulas differ
        because the physics differ: a boardercross racer carving through banked turns
        at 60 mph needs every centimeter of edge contact, while a powder rider floating
        through chest-deep snow needs the board to pivot freely. The method signature
        is identical — the implementation is what changes.
      </p>

      {/* ---- Section 5: Method Hiding ---- */}
      <h2>Method Hiding vs. Method Overriding</h2>
      <p>
        In languages like C#, there's an important distinction between{" "}
        <strong>method hiding</strong> and <strong>method overriding</strong>. In C#,
        you can use the <code>new</code> keyword to explicitly <em>hide</em> a parent
        method rather than override it. The behavioral difference matters:
      </p>
      <ul>
        <li>
          <strong>Overriding</strong> — The child's version always runs, even when the
          object is referenced through the parent type. The method is resolved based on
          the <em>actual</em> object type at runtime.
        </li>
        <li>
          <strong>Hiding</strong> — The parent's version runs when the object is
          referenced through the parent type. The method is resolved based on the{" "}
          <em>declared</em> variable type at compile time.
        </li>
      </ul>

      <CodeBlock language="TypeScript" filename="hiding-vs-overriding.ts">
{`// In C#, this distinction is explicit:
//
//   class Parent {
//     public virtual void Speak() => Console.WriteLine("Parent");
//   }
//   class ChildOverride : Parent {
//     public override void Speak() => Console.WriteLine("Override");
//   }
//   class ChildHide : Parent {
//     public new void Speak() => Console.WriteLine("Hidden");
//   }
//
//   Parent a = new ChildOverride();
//   a.Speak(); // "Override" — child version wins (override)
//
//   Parent b = new ChildHide();
//   b.Speak(); // "Parent" — parent version wins (hiding)

// TypeScript does NOT have a "new" keyword for method hiding.
// When you define a method with the same name in a child class,
// it always OVERRIDES — the child version runs regardless of
// the reference type.

class Snowboard {
  describe(): string {
    return "I am a snowboard"
  }
}

class PowderBoard extends Snowboard {
  describe(): string {
    return "I am a powder board"
  }
}

// Even when typed as Snowboard, the PowderBoard version runs
const board: Snowboard = new PowderBoard()
console.log(board.describe()) // "I am a powder board"`}
      </CodeBlock>

      <p>
        In TypeScript (and JavaScript), you always get override behavior. There is no
        way to hide a method. This is actually simpler and more predictable — the
        object's actual type determines which method runs, period.
      </p>

      {/* ---- Section 6: The Object Class ---- */}
      <h2>The Object Class</h2>
      <p>
        In JavaScript and TypeScript, every object ultimately inherits from{" "}
        <code>Object</code>. This is the root of the prototype chain. Even our{" "}
        <code>Snowboard</code> class inherits methods from <code>Object.prototype</code>{" "}
        — methods like <code>toString()</code>, <code>valueOf()</code>, and{" "}
        <code>hasOwnProperty()</code>.
      </p>

      <CodeBlock language="TypeScript" filename="object-prototype.ts">
{`const board = new Snowboard(158, 25.5, 8, 6)

// These all come from Object.prototype
console.log(board.toString())              // "[object Object]"
console.log(board.valueOf())               // the board object itself
console.log(board.hasOwnProperty("length")) // true
console.log(board.hasOwnProperty("color"))  // false`}
      </CodeBlock>

      <p>
        That default <code>toString()</code> output isn't very helpful. We can override
        it to return something meaningful.
      </p>

      <CodeBlock language="TypeScript" filename="toString-override.ts">
{`class Snowboard {
  length: number
  width: number
  sidecut: number
  flex: number

  constructor(length: number, width: number, sidecut: number, flex: number) {
    this.length = length
    this.width = width
    this.sidecut = sidecut
    this.flex = flex
  }

  calculateEffectiveEdge(): number {
    return this.length - 2 * this.sidecut
  }

  toString(): string {
    return \`Snowboard(\${this.length}cm x \${this.width}cm)\`
  }
}

const board = new Snowboard(158, 25.5, 8, 6)
console.log(board.toString()) // "Snowboard(158cm x 25.5cm)"
console.log(\`My board: \${board}\`) // "My board: Snowboard(158cm x 25.5cm)"`}
      </CodeBlock>

      <p>
        Now whenever the board is converted to a string — whether explicitly or through
        template literal interpolation — we get a useful description instead of{" "}
        <code>[object Object]</code>.
      </p>

      {/* ---- Section 7: Polymorphism ---- */}
      <h2>Polymorphism</h2>
      <p>
        This is the payoff. Polymorphism means "many forms," and it's the reason
        inheritance matters. When you have a collection of objects that share a common
        parent type, you can call the same method on each one and get different behavior
        depending on the actual type. You don't need to know which specific child class
        you're dealing with — you just call the method and trust each object to do the
        right thing.
      </p>

      <CodeBlock language="TypeScript" filename="polymorphism.ts">
{`// Create a quiver of different board types
const quiver: Snowboard[] = [
  new AllMountainBoard(158, 25.5, 8, 6),
  new HalfpipeBoard(152, 24.8, 7.5, 4, 22),
  new BoardercrossBoard(162, 25.0, 8.5, 8),
  new PowderBoard(160, 26.0, 7, 3),
]

// Same method call on every board — different results each time
for (const board of quiver) {
  const edge = board.calculateEffectiveEdge()
  console.log(\`\${board.constructor.name}: \${edge}cm effective edge\`)
}

// Output:
// AllMountainBoard:  142cm effective edge   (158 - 2*8)
// HalfpipeBoard:     135cm effective edge   (152 - 2*7.5 - 2)
// BoardercrossBoard: 146cm effective edge   (162 - 2*8.5 + 1)
// PowderBoard:       141cm effective edge   (160 - 2*7 - 5)`}
      </CodeBlock>

      <p>
        Look at what's happening here. The <code>quiver</code> array is typed as{" "}
        <code>Snowboard[]</code>. The loop doesn't know or care whether it's dealing
        with a halfpipe board or a powder board. It calls{" "}
        <code>calculateEffectiveEdge()</code> and each board responds with its own
        formula. That's polymorphism — one interface, many implementations.
      </p>
      <p>
        This is incredibly powerful for real applications. Imagine a snowboard shop
        comparison tool: you load every board from a database, stuff them into an array,
        and run the same calculations on all of them. When a new board type gets added
        next season, none of the comparison code needs to change.
      </p>

      {/* ---- Section 8: Type Checking with instanceof ---- */}
      <h2>Type Checking with instanceof</h2>
      <p>
        Sometimes polymorphism isn't enough — you need to know the specific type of an
        object. TypeScript's <code>instanceof</code> operator lets you check at runtime,
        and it works as a <strong>type guard</strong> that narrows the type within a
        conditional block.
      </p>

      <CodeBlock language="TypeScript" filename="instanceof.ts">
{`function describeBoard(board: Snowboard): string {
  if (board instanceof HalfpipeBoard) {
    // TypeScript now knows board is HalfpipeBoard inside this block
    return \`Halfpipe board for \${board.wallHeight}ft walls\`
  }
  if (board instanceof PowderBoard) {
    return "Powder board — float over the deep stuff"
  }
  if (board instanceof BoardercrossBoard) {
    return "Boardercross board — built for speed"
  }
  return "All-mountain board — does everything well"
}

// Custom type guard function
function isHalfpipeBoard(board: Snowboard): board is HalfpipeBoard {
  return board instanceof HalfpipeBoard
}

// Using the type guard
const mystery: Snowboard = new HalfpipeBoard(152, 24.8, 7.5, 4, 22)

if (isHalfpipeBoard(mystery)) {
  // TypeScript knows mystery is HalfpipeBoard here
  console.log(mystery.wallHeight) // 22 — no type error
}`}
      </CodeBlock>

      <p>
        The <code>board is HalfpipeBoard</code> return type in the type guard function
        is a TypeScript-specific feature. It tells the compiler: "if this function
        returns <code>true</code>, narrow the type of <code>board</code> to{" "}
        <code>HalfpipeBoard</code> in the calling scope." This gives you runtime safety{" "}
        <em>and</em> compile-time type narrowing in one clean pattern.
      </p>

      {/* ---- Section 9: Type Assertions (Casting) ---- */}
      <h2>Type Assertions (Casting)</h2>
      <p>
        When you know more about an object's type than TypeScript does, you can use a
        type assertion to access child-specific properties. But this is a sharp tool —
        used carelessly, it will blow up at runtime.
      </p>

      <CodeBlock language="TypeScript" filename="type-assertions.ts">
{`const boards: Snowboard[] = [
  new AllMountainBoard(158, 25.5, 8, 6),
  new HalfpipeBoard(152, 24.8, 7.5, 4, 22),
]

// SAFE: check first, then access child-specific properties
for (const board of boards) {
  if (board instanceof HalfpipeBoard) {
    // TypeScript narrows the type automatically after instanceof
    console.log(\`Wall height: \${board.wallHeight}ft\`)
  }
}

// DANGEROUS: casting without checking
const someBoard: Snowboard = new AllMountainBoard(158, 25.5, 8, 6)

// This compiles fine but wallHeight is undefined at runtime!
const forced = someBoard as HalfpipeBoard
console.log(forced.wallHeight) // undefined — silent bug

// The safe pattern: always guard before accessing
function getWallHeight(board: Snowboard): number | undefined {
  if (board instanceof HalfpipeBoard) {
    return board.wallHeight
  }
  return undefined
}`}
      </CodeBlock>

      <p>
        The rule of thumb: prefer <code>instanceof</code> checks over type assertions.
        An <code>instanceof</code> check is a runtime truth — the object either is or
        isn't that type. A type assertion with <code>as</code> is you telling the
        compiler "trust me," and the compiler will trust you even when you're wrong.
      </p>

      {/* ---- Section 10: SOLID Principles ---- */}
      <h2>SOLID Principles</h2>
      <p>
        Our snowboard hierarchy naturally demonstrates two key SOLID principles. The
        first is the <strong>Open/Closed Principle</strong>: the system is{" "}
        <em>open for extension</em> but <em>closed for modification</em>. Want to add
        a new board type? Write a new class. You never need to touch{" "}
        <code>Snowboard</code>, <code>HalfpipeBoard</code>, or any existing class.
      </p>

      <CodeBlock language="TypeScript" filename="SplitBoard.ts">
{`// Adding a new board type — zero changes to existing classes

class SplitBoard extends Snowboard {
  skinIncluded: boolean

  constructor(
    length: number, width: number, sidecut: number,
    flex: number, skinIncluded: boolean
  ) {
    super(length, width, sidecut, flex)
    this.skinIncluded = skinIncluded
  }

  calculateEffectiveEdge(): number {
    // Splitboards lose effective edge at the split seam running
    // down the center — subtract 3cm to account for the hardware
    // and gap where the two halves meet
    return this.length - 2 * this.sidecut - 3
  }
}

// Existing polymorphic code works immediately with the new type
const expandedQuiver: Snowboard[] = [
  new AllMountainBoard(158, 25.5, 8, 6),
  new HalfpipeBoard(152, 24.8, 7.5, 4, 22),
  new BoardercrossBoard(162, 25.0, 8.5, 8),
  new PowderBoard(160, 26.0, 7, 3),
  new SplitBoard(161, 25.8, 8, 5, true),  // drops right in
]

for (const board of expandedQuiver) {
  console.log(\`\${board.constructor.name}: \${board.calculateEffectiveEdge()}cm\`)
}

// Output now includes:
// SplitBoard: 142cm effective edge   (161 - 2*8 - 3)`}
      </CodeBlock>

      <p>
        The second principle at work is <strong>Single Responsibility</strong>. Each
        class is responsible for one thing: its own effective edge calculation. The{" "}
        <code>HalfpipeBoard</code> doesn't know anything about powder riding.
        The <code>PowderBoard</code> doesn't know anything about halfpipe walls.
        Each class encapsulates the knowledge that's relevant to its board type and
        nothing more.
      </p>
      <p>
        Together, these principles make the hierarchy easy to extend and easy to
        maintain. Next season, when someone invents a new board category, you write one
        class, override one method, and everything else — the comparison tools, the
        shop displays, the quiver management — just works.
      </p>
    </ConceptLayout>
  )
}
