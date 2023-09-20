import { Employee } from "../../providers/EmployeesDataProvider/EmployeeTypes";
import IconButton from "../IconButton";
import { ReactComponent as GitHub } from "../../assets/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import "./contact.css";

type Contact = Pick<
  Employee,
  | "name"
  | "office"
  | "gitHub"
  | "linkedIn"
  | "twitter"
  | "imagePortraitUrl"
  | "imageWallOfLeetUrl"
>;

const Contact: React.FC<Employee & { asRow?: boolean }> = ({
  name,
  office,
  imagePortraitUrl,
  imageWallOfLeetUrl,
  gitHub,
  linkedIn,
  twitter,
  asRow,
}) => {
  const links = [
    { GitHub: gitHub },
    { LinkedIn: linkedIn },
    { Twitter: twitter },
  ]
    .filter((link) => Object.values(link)[0])
    .map((link) => ({
      [Object.keys(link) as unknown as string]: Object.values(link)[0],
    }));

  const LinkComponents = {
    GitHub: GitHub,
    LinkedIn: LinkedIn,
    Twitter: Twitter,
  };

  const baseUrls = {
    GitHub: "https://github.com",
    LinkedIn: "https://linkedin.com",
    Twitter: "https://twitter.com",
  };

  return (
    <div className={`contact ${asRow ? 'contact--as-row' : ''}`}>
      <img
        className="contact-image"
        alt={name}
        src={
          imageWallOfLeetUrl ||
          imagePortraitUrl ||
          "https://wildcard.codestuff.io/dog/250/250"
        }
      />
      <div className="contact-primary-content">
        <div className="contact-details">
          <div>{name}</div>
          <div>Office: {office}</div>
        </div>
        <div className="contact-social-links">
          {links.map((link) => {
            const Link =
              LinkComponents[
                Object.keys(link) as unknown as keyof typeof LinkComponents
              ];
            const baseUrl =
              baseUrls[Object.keys(link) as unknown as keyof typeof baseUrls];
            return (
              <IconButton
                key={`${name}-${Object.keys(link)}`}
                url={`${baseUrl}/${Object.values(link)}`}
                ariaLabel={`${name} on ${Object.keys(link)}`}
              >
                <Link />
              </IconButton>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
