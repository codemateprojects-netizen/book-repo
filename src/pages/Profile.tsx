import React, { useState } from "react";
import "./Profile.css";

type Tab = "profile" | "security" | "activity" | "verify";

const Profile: React.FC = () => {
  const [tab, setTab] = useState<Tab>("profile");
  const [edit, setEdit] = useState(false);

  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    mobile: "9876543210",
    city: "Pune",
    college: "COEP Pune",
    course: "B.Tech Computer Engineering",
    year: "3rd Year",
    skills: ["C++", "Java", "React"],
    verified: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile">
      <div className="profileContainer">
        {/* Header */}
        <div className="profileHeader">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
            className="avatar"
          />
          <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            {!user.verified && (
              <span className="verifyBadge">Email Not Verified</span>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <button onClick={() => setTab("profile")} className={tab === "profile" ? "active" : ""}>Profile</button>
          <button onClick={() => setTab("security")} className={tab === "security" ? "active" : ""}>Security</button>
          <button onClick={() => setTab("activity")} className={tab === "activity" ? "active" : ""}>Activity</button>
          <button onClick={() => setTab("verify")} className={tab === "verify" ? "active" : ""}>Verification</button>
        </div>

        {/* Content */}
        <div className="profileCard">

          {/* PROFILE TAB */}
          {tab === "profile" && (
            <>
              {!edit ? (
                <>
                  <Info label="Mobile" value={user.mobile} />
                  <Info label="City" value={user.city} />
                  <Info label="College" value={user.college} />
                  <Info label="Course" value={user.course} />
                  <Info label="Year" value={user.year} />

                  <div className="skills">
                    <span>Skills</span>
                    <div className="skillTags">
                      {user.skills.map((s) => (
                        <div key={s} className="tag">
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="editBtn" onClick={() => setEdit(true)}>
                    Edit Profile
                  </button>
                </>
              ) : (
                <div className="editForm">
                  <Input label="Name" name="name" value={user.name} onChange={handleChange} />
                  <Input label="Email" name="email" value={user.email} onChange={handleChange} />
                  <Input label="Mobile" name="mobile" value={user.mobile} onChange={handleChange} />
                  <Input label="City" name="city" value={user.city} onChange={handleChange} />
                  <Input label="College" name="college" value={user.college} onChange={handleChange} />
                  <Input label="Course" name="course" value={user.course} onChange={handleChange} />
                  <Input label="Year" name="year" value={user.year} onChange={handleChange} />

                  <div className="formBtns">
                    <button className="saveBtn" onClick={() => setEdit(false)}>Save</button>
                    <button className="cancelBtn" onClick={() => setEdit(false)}>Cancel</button>
                  </div>
                </div>
              )}
            </>
          )}

          {/* SECURITY TAB */}
          {tab === "security" && (
            <div className="editForm">
              <h3>Change Password</h3>
              <Input label="Current Password" name="old" value="" onChange={() => {}} />
              <Input label="New Password" name="new" value="" onChange={() => {}} />
              <Input label="Confirm Password" name="confirm" value="" onChange={() => {}} />
              <button className="saveBtn">Update Password</button>
            </div>
          )}

          {/* ACTIVITY TAB */}
          {tab === "activity" && (
            <div className="activityList">
              <h3>Recent Activity</h3>
              <ul>
                <li>Logged in - Today 10:30 AM</li>
                <li>Added a book for sale - Yesterday</li>
                <li>Updated profile - 2 days ago</li>
                <li>Changed password - 1 week ago</li>
              </ul>
            </div>
          )}

          {/* VERIFICATION TAB */}
          {tab === "verify" && (
            <div className="verifyBox">
              <h3>Email Verification</h3>
              {user.verified ? (
                <p className="verified">Your email is verified ✅</p>
              ) : (
                <>
                  <p>Your email is not verified.</p>
                  <button className="saveBtn">Send Verification Email</button>
                </>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

const Info = ({ label, value }: { label: string; value: string }) => (
  <div className="infoRow">
    <span>{label}</span>
    <p>{value}</p>
  </div>
);

const Input = ({
  label,
  ...props
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="inputGroup">
    <label>{label}</label>
    <input {...props} />
  </div>
);

export default Profile;
