import './about.css';

export default function AboutLoggedOut() {
    return (
        <div className="about">
            <h1>About Goals!</h1>

            <h3>Want to see the app?</h3>
            <p>
                This app requires you to sign in with google in order to use it, to respect
                user privacy. You wouldn't want just anyone to see some of these, would you?
            </p>

            <h3>Inspiration</h3>
            <p>
                Look. I'm terrible with time management and procrastination. I have to set alarms for literally everything and when something comes to be due it's always absolute last minute. I'm building this app to help myself and others in my situation actually get stuff done (for free!).
            </p>
            <br />

            <h3>What it does</h3>
            <p>
            It helps you track all your goals, and has several pages for making good goals, how you can achieve them and ways you can improve yourself to meet those expectations you set for yourself.
            </p>
            <br />

            <h3>How I built it</h3>
            <p>
                It is built using React, NodeJS, Google Firebase, Bootstrap, HTML and CSS. 
            </p>
            <br />

            <h3>Challenges I ran into</h3>
            <p>
                I am very new to the idea of BaaS. I had several issues getting the Firestore database working exactly as I wanted to, along with some small compatibility issues with certain web browsers due to some CSS elements. In the end, I was able to sort out most of these, but some had to be worked around with less-than-ideal solutions such as the compatibility issues. 
            </p>
            <br />

            <h3>What I learned</h3>
            <ul>
                <li>BaaS/Firebase</li>
                <li>A lot of React hooks! I normally used Class components before, but this was a great time to explore something new.</li>
                <li>Bootstrap! I normally write all the CSS by hand, and WOW does this save a lot of time! I'd say it halved the development timeframe, which was crucial since I'm a one man team.</li>
            </ul>
            <br />

            <h3>What's Different</h3>
            <p>I looked through google for a lot of these apps, and most of them charge for certain services with a "premium" fee. I want to make all core functionalities in this app free, including reminders.</p>
            <br />

            <h3>What's next for Goals</h3>
            <p>If this actually gains traction and people really like it, I would love to deploy it to scale, completely free of charge! I would also love to include text and discord notifications to remind people they have deadlines coming up, rather than just having it be in-site. There are a lot of features that could be really cool to integrate, and that's why I love simple and to-the-point projects.</p>
            <br />

            <a href="https://github.com/rquit/HackUIowa"><h3>Github Repo!</h3></a>
        </div>
    )
}