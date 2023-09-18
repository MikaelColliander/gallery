import { Employee } from "../../providers/EmployeesDataProvider/EmployeeTypes";
import "./contact.css";

type Contact = Pick<Employee, "name" | "office" | "gitHub" | "linkedIn" | "twitter" | "imagePortraitUrl" | "imageWallOfLeetUrl">

const Contact: React.FC<Employee> = ({ name, office, imagePortraitUrl, imageWallOfLeetUrl }) => {
  return (
    <div className="contact">
      <img className="contact-image" alt={name} src={ imageWallOfLeetUrl || imagePortraitUrl ||  "https://wildcard.codestuff.io/dog/250/250"} />
      <div className="contact-details">
        <div>
          <p>{name}</p>
          <p>Office: {office}</p>   
        </div>
      </div>
    </div>
  );
};

export default Contact;
