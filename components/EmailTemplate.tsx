interface EmailTemplateProps {
    firstname: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = () => (
    <div>
        <h1>Congratulations! </h1>
        <p>
            You have successfully secured your seat for the next cohort of Software
            Development Mentorship Programme starting by April 15, 2024{" "}
            <span className="font-bold">
                Below are the things you need to do to prepare yourself:
            </span>{" "}
        </p>
        <ol>
            <li>Setup your dev tools (laptop and IDE) </li>
            <li>
                Join our discord <a href="https://dash.xperiencedtekie.pro"> here</a>.
                This would be your official workspace
            </li>
            <li>
                Share this email on your X (fomerly twitter) and tag us, also give us a
                follow <a href="https://dash.xperiencedtekie.pro"> here</a>
            </li>
            <li>Reply this email telling us how happy you are to get started</li>
        </ol>

        <p>
            Once again, I congratulate you for starting this journey! Feel free to
            reach out to us if you have any issues or queries!
        </p>
        <p>
            <b>Xperienced Tekie</b>
        </p>
        <span>
            <em>With Love!</em>
        </span>
    </div>
);