const JobCard = (props) => {
  const {
    jdData:{
    companyName,
    jdLink,
    jobDetailsFromCompany,
    jobRole,
    location,
    logoUrl,
    maxExp,
    maxJdSalary,
    minExp,
    minJdSalary,
    salaryCurrencyCode,
    }
  } = props;

  return (
    <div className="card">
      <div className="jobpost-date">
        <p className="posted-date">⌛Posted 13 days ago</p>
      </div>
      <div className="job-section">
            <div className="job-profile">
            <img className="company-logo" src={logoUrl} alt="logo.png"/>
            <div className="profile">
                <div className="company-name">{companyName}</div>
                <div className="company-job-role">{jobRole}</div>
                <div className="company-location">{location}</div>
            </div>
            </div>
            <div className="salary-details">
            <p>
                Estimated Salary:{" "}
                {`₹ ${minJdSalary ? `${minJdSalary} - ` : ""}${maxJdSalary} LPA`}{" "}
                ✅
            </p>
            </div>
            <div className="company-overview">
                <div className="company-desc">
                <p>About Company :</p>
                <p>About Us:</p>
                </div>
                <div className="role-desc">
                <span>{jobDetailsFromCompany}</span>
                </div>
                <div className="view-more"><a href={jdLink}>View more</a></div>
                {minExp && <div className="company-min-exp">Minimum Experience</div>}
                <div>{`${minExp ? `${minExp} years`: '' }`}</div>
            </div>   
      </div>
      <div className="card-btns">
        <div className="apply-btn">⚡Easy Apply</div>
        <div  className="referral-btn">👩‍🦳🧑‍🦱Unlock referral asks</div>
      </div>
    </div>
  );
};

export default JobCard;
