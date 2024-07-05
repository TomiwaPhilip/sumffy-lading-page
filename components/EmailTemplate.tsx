interface EmailTemplateProps {
    firstname: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = () => (
    <div>
        <h1>Congratulations! </h1>
        <p>
            You have successfully secured your seat among our first early users.
        </p>

        <p>
            Note that we will send you emails to be update you about the development and launch of Scumffy. 
        </p>
        <p>
            <b>Tomiwa Philip</b>
        </p>
        <span>
            <em>With Love!</em>
        </span>
    </div>
);

interface EmailTemplateProps2 {
    email: string;
  }
  
  
  export const EmailTemplate2: React.FC<Readonly<EmailTemplateProps2>> = ({
    email,
  }) => (
    <div>
      <h1>New Signup, Ahmed!</h1>
      <h1 className='text-sm text-blue-500'>Another user with email {email} has successfully signed up for the early access!</h1>
    </div>
  );