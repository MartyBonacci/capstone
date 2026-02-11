import type { MetaFunction } from "react-router"
import { ConceptLayout } from "../../components/ConceptLayout"
import { CodeBlock } from "../../components/CodeBlock"

export const meta: MetaFunction = () => [
  { title: "GUI Programming | Concepts | Marty Bonacci" },
  {
    name: "description",
    content:
      "GUI programming with React - component architecture, state management, event handling, and modal patterns from real applications.",
  },
]

export default function GuiPage() {
  return (
    <ConceptLayout title="GUI Programming">
      <p>
        When most people hear "GUI programming," they think of dragging buttons
        onto a canvas in Visual Studio or Xcode. In React, the approach is
        completely different. You build your interface by composing components
        — small, focused pieces that each handle one part of the screen. Let me
        walk you through how this works with code from two real projects.
      </p>

      {/* ── Section 1: Creating a GUI (Component Architecture) ── */}
      <h2>Creating a GUI: Component Architecture</h2>
      <p>
        In React, you build GUIs by composing components together. Each component
        is responsible for one piece of the interface. Here is the landing page
        from CustomCult2 — a snowboard design platform where users input their
        body measurements and the app generates a custom board geometry.
      </p>

      <CodeBlock
        language="JSX"
        filename="customcult2/resources/js/pages/landing/landing.jsx"
      >{`import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from '../../components/nav-bar/nav-bar';
import InputScroller from '../../components/input-scroller/input-scroller';
import RidingStyleSelector from '../../components/riding-style-selector/riding-style-selector';
import Footer from '../../components/footer/footer';

const Landing = () => {
    const dispatch = useDispatch();
    const landingTab = useSelector(state => state.BoardDesign.landingTab);

    return (
        <StyledLanding>
            <NavBar />
            <InputScroller tab={landingTab} />
            <RidingStyleSelector />
            <Footer />
        </StyledLanding>
    );
};`}</CodeBlock>

      <p>
        Look at how clean this is. Each component handles its own piece of the
        UI. <code>NavBar</code> handles navigation, <code>InputScroller</code>{" "}
        handles the measurement inputs, <code>RidingStyleSelector</code> lets
        users pick their riding style, and <code>Footer</code> sits at the
        bottom. The landing page itself does almost nothing — it just composes
        these pieces together and passes down a bit of state. That is the whole
        idea behind component architecture.
      </p>

      {/* ── Section 2: Model Classes for Form Data ── */}
      <h2>Model Classes for Form Data</h2>
      <p>
        Behind every form is a data model — something that defines the shape of
        the information you are collecting. In CustomCult2, we used Redux to hold
        all the board design state in a single global store. Here is what that
        state shape looked like:
      </p>

      <CodeBlock language="JavaScript">{`// CustomCult2 Redux state shape — the "model" behind the form
state.BoardDesign = {
    designfactors: {
        bodyHeight: 1765.3,      // mm
        weight: 155,              // lbs
        footSize: 10,             // US mens
        abilityLevel: 0.95,       // 0-1 scale
        frontStanceAngle: 15,     // degrees
        rearStanceAngle: -12,     // degrees
        goofyOrRegular: 'regular',
        designer: { id: 1, first_name: 'Marty', last_name: 'Bonacci', avatar_image: '...' }
    },
    displayUpload: false,
    landingTab: 'body',
    geometry: null,    // Three.js geometry object
    designers: []      // all registered designers
};`}</CodeBlock>

      <p>
        That works, but it is a big bag of data with no validation. When I built
        Tweeter a few years later, TypeScript gave us a much better approach —
        interfaces and Zod schemas that validate data at the boundary:
      </p>

      <CodeBlock
        language="TypeScript"
        filename="tweeter-gdg-1/app/models/tweet/tweet.schema.ts"
      >{`import { z } from 'zod';

export const createTweetSchema = z.object({
    content: z.string().min(1).max(280),
});

export type CreateTweetInput = z.infer<typeof createTweetSchema>;`}</CodeBlock>

      <CodeBlock
        language="TypeScript"
        filename="tweeter-gdg-1/app/models/user/user.model.ts"
      >{`export interface PublicProfile {
    id: string;
    username: string;
    displayName: string;
    avatarUrl: string | null;
    bio: string | null;
    followersCount: number;
    followingCount: number;
}`}</CodeBlock>

      <p>
        See the evolution? CustomCult2 used Redux — a global store where
        everything lives in one big object. Tweeter uses TypeScript interfaces
        and Zod schemas that validate at the boundary. Both serve the same
        purpose: defining the shape of your data. But the TypeScript approach
        catches errors at compile time instead of at runtime, and the Zod schemas
        give you runtime validation where you actually need it — at API
        boundaries.
      </p>

      {/* ── Section 3: Adding Controls to Forms ── */}
      <h2>Adding Controls to Forms</h2>
      <p>
        Now let us look at how you actually build a form. Here is the signup form
        from CustomCult2. Notice how every input is wired up to React state:
      </p>

      <CodeBlock
        language="JSX"
        filename="customcult2/resources/js/pages/modal-views/signup.jsx"
      >{`const Signup = ({ renavigate }) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="firstname"
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={handleChange}
            />
            <input
                name="lastname"
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={handleChange}
            />
            <input
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
            />
            <input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
            />
            <input
                name="passwordConfirmation"
                type="password"
                placeholder="Confirm Password"
                value={passwordConfirmation}
                onChange={handleChange}
            />
            <button type="submit">Sign Up</button>
        </form>
    );
};`}</CodeBlock>

      <p>
        Each input here is a <strong>controlled component</strong>. That means
        React state is the single source of truth — the input just reflects
        whatever is in state. When the user types, the <code>onChange</code>{" "}
        handler updates state, which causes a re-render, which updates the input.
        It sounds like a lot of work, but it gives you complete control over the
        form data at every moment.
      </p>

      {/* ── Section 4: Positioning Controls ── */}
      <h2>Positioning Controls</h2>
      <p>
        React handles the what. CSS handles the where. In CustomCult2, we used
        styled-components to keep layout logic close to the components that
        needed it:
      </p>

      <CodeBlock
        language="JSX"
        filename="customcult2/resources/js/pages/landing/styledLanding.jsx"
      >{`import styled from 'styled-components';

export const StyledLanding = styled.div\`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
\`;

export const StyledThreeJs = styled.div\`
    @media only screen and (orientation: portrait) {
        height: 50vh;
        width: 100vw;
    }
    @media only screen and (orientation: landscape) {
        height: 100vh;
        width: 50vw;
    }
\`;`}</CodeBlock>

      <p>
        CSS handles all the positioning. Flexbox controls the layout flow, and
        media queries handle responsive behavior. The 3D viewer (
        <code>StyledThreeJs</code>) splits the screen — it takes up half the
        viewport in landscape orientation and half in portrait. This way the
        snowboard model and the input controls always share the screen nicely,
        regardless of device orientation.
      </p>

      {/* ── Section 5: Event Handling ── */}
      <h2>Event Handling</h2>
      <p>
        Events are how your GUI responds to users. React gives you a consistent
        API across all DOM events. Let me show you four different patterns from
        the codebase, starting simple and getting more advanced.
      </p>

      <h3>Pattern 1: onClick for Tab Selection</h3>
      <p>
        The simplest event pattern — click a button, update state:
      </p>

      <CodeBlock
        language="JSX"
        filename="customcult2/resources/js/components/landing-tabs/landing-tabs.jsx"
      >{`const LandingTabs = () => {
    const [tab, setTab] = useState('body');

    return (
        <div>
            <button onClick={() => setTab('body')}>Body</button>
            <button onClick={() => setTab('stance')}>Stance</button>
            <button onClick={() => setTab('style')}>Style</button>
        </div>
    );
};`}</CodeBlock>

      <h3>Pattern 2: onChange with a Switch Statement</h3>
      <p>
        When you have multiple inputs sharing one handler, a switch statement
        routes each field to its own setter:
      </p>

      <CodeBlock
        language="JSX"
        filename="customcult2/resources/js/pages/modal-views/signup.jsx"
      >{`const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    switch (name) {
        case 'firstname': setFirstname(value); break;
        case 'lastname': setLastname(value); break;
        case 'email': setEmail(value); break;
        case 'password': setPassword(value); break;
        case 'passwordConfirmation': setPasswordConfirmation(value); break;
    }
}, []);`}</CodeBlock>

      <h3>Pattern 3: onSubmit</h3>
      <p>
        Form submission — prevent the default browser behavior and dispatch the
        data to your store:
      </p>

      <CodeBlock language="JSX">{`// Same file — form submission
const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ firstname, lastname, email, password, passwordConfirmation }));
};`}</CodeBlock>

      <h3>Pattern 4: Touch and Mouse Events for Custom Controls</h3>
      <p>
        Sometimes standard inputs are not enough. The stance angle input in
        CustomCult2 needed a custom drag interaction — users drag up or down to
        adjust their binding angles:
      </p>

      <CodeBlock
        language="JSX"
        filename="customcult2/resources/js/components/board-sliders/stance-angle-input.jsx"
      >{`const StanceAngleInput = ({ angle, onAngleChange }) => {
    const handleMouseDown = (e) => {
        e.preventDefault();
        const startY = e.clientY;
        const startAngle = angle;

        const handleMouseMove = (moveEvent) => {
            const delta = startY - moveEvent.clientY;
            onAngleChange(startAngle + delta * 0.5);
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return <div onMouseDown={handleMouseDown} onTouchStart={handleTouchStart}>...</div>;
};`}</CodeBlock>

      <p>
        React supports the full range of DOM events. Simple clicks, form changes,
        submissions, and even raw mouse and touch tracking for custom slider
        controls. The stance angle input is a good example of when you need to go
        beyond standard form elements — it listens for mousedown, then attaches
        temporary mousemove and mouseup listeners to the document so the drag
        works even if the cursor leaves the element.
      </p>

      {/* ── Section 6: Framework-Defined Dialogs ── */}
      <h2>Framework-Defined Dialogs</h2>
      <p>
        Some dialogs come from the browser itself. The file picker is one of the
        most common — you do not build it, you just trigger it:
      </p>

      <CodeBlock
        language="JSX"
        filename="customcult2/resources/js/components/uploader/uploader.jsx"
      >{`<input
    type="file"
    id="topGraphicInput"
    accept=".jpg, .jpeg, .svg"
    onChange={(e) => {
        queueTopGraphic(e.target.files[0]);
        e.target.value = '';  // reset so same file can be re-selected
    }}
/>`}</CodeBlock>

      <p>
        The browser provides the file picker dialog. The <code>accept</code>{" "}
        attribute filters which file types the user can select. The{" "}
        <code>onChange</code> fires after the user picks a file, giving you
        access to it via <code>e.target.files[0]</code>. Notice the little trick
        at the end — resetting <code>e.target.value</code> to an empty string so
        the same file can be re-selected if needed. Without that, picking the
        same file twice would not fire the change event a second time.
      </p>

      {/* ── Section 7: Custom Dialog (Modal Pattern) ── */}
      <h2>Custom Dialog: The Modal Pattern</h2>
      <p>
        When the browser's built-in dialogs are not enough, you build your own.
        Here is the upload modal from CustomCult2 — the button toggles Redux
        state, and the modal renders conditionally based on that state:
      </p>

      <CodeBlock
        language="JSX"
        filename="customcult2/resources/js/components/uploader/uploader.jsx"
      >{`const Uploader = ({ displayUpload, showUploadModal, queueTopGraphic }) => {
    return (
        <div>
            <button onClick={() => showUploadModal(!displayUpload)}>
                Upload Graphic
            </button>
            <Modal open={displayUpload}>
                <input
                    type="file"
                    accept=".jpg, .jpeg, .svg"
                    onChange={(e) => {
                        queueTopGraphic(e.target.files[0]);
                        showUploadModal(false);
                    }}
                />
            </Modal>
        </div>
    );
};

// Connected to Redux store
const mapStateToProps = (state) => ({
    displayUpload: state.BoardDesign.displayUpload,
});

const mapDispatchToProps = { showUploadModal, queueTopGraphic };
export default connect(mapStateToProps, mapDispatchToProps)(Uploader);`}</CodeBlock>

      <p>
        And here is a subtler modal pattern — navigation between modal views.
        The signup modal has a link to switch to the login modal, using a
        callback from the parent:
      </p>

      <CodeBlock
        language="JSX"
        filename="customcult2/resources/js/pages/modal-views/signup.jsx"
      >{`// Child modal receives renavigate callback from parent
const Signup = ({ renavigate }) => {
    return (
        <div>
            {/* ... form fields ... */}
            <p>
                Already have an account?{' '}
                <button onClick={() => renavigate('Login')}>Sign In</button>
            </p>
        </div>
    );
};`}</CodeBlock>

      <p>
        The modal is controlled by Redux state (<code>displayUpload</code>). The
        parent controls visibility, and the child reports back through callbacks.
        This parent-child communication pattern is fundamental to React — the
        parent owns the state and passes down both data and functions. The child
        never directly manipulates the parent's state; it calls the callback and
        lets the parent decide what to do.
      </p>

      <p>
        That covers the core of GUI programming in React: component composition
        for structure, controlled components for forms, CSS for layout, events
        for interaction, and modals for overlay dialogs. Every complex interface
        is built from these same building blocks.
      </p>
    </ConceptLayout>
  )
}
