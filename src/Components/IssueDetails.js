import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../Styles/IssueDetails.css";

const IssueDetails = () => {
  const [issue, setIssue] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://api.github.com/repos/octocat/Spoon-Knife/issues/${params.number}`
    )
      .then((res) => res.json())
      .then((res) => {
        setIssue(res);
        console.log(res);
      });
  }, [params.number]);

  return (
    <div className="issue-details-container">
      <div className="backcon">
        <Link to="/" className="go-back-link">
          <button className="go-back-button">Go Back</button>
        </Link>
      </div>
      <table className="issue-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Number</th>
            <th>Picture</th>
            <th>Repo Url</th>
          </tr>
        </thead>
        <tbody>
          <tr key={issue.id}>
            <td>{issue.id}</td>
            <td>{issue.title}</td>
            <td>{issue.number}</td>
            <td>
              <img
                src={issue.user?.avatar_url}
                alt="err"
                className="user-avatar"
              />
            </td>
            <td><Link to={issue.repository_url}>Repo Url</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IssueDetails;
