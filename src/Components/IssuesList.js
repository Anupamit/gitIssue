import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import "../Styles/IssuesList.css"

const IssuesList = () => {
  const [issues, setIssues] = useState([]);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 6;

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/octocat/Spoon-Knife/issues`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/repos/octocat/Spoon-Knife/issues?page=${page}&per_page=${limit}`
      )
      .then((res) => {
        setIssues(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  const totalPages = Math.ceil(data.length / limit);

  return (
    <div>
      <div className="issues-list">
        <table className="issues-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Click Me</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((el) => (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.title}</td>
                <td>
                  <Link to={`/issue/${el.number}`}>Issue Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <Pagination total={totalPages} current={page} handlePage={setPage} />
      </div>
    </div>
  );
};

export default IssuesList;
