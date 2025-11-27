import React from "react";

function Report2Component() {
  return (
    <div className="flex flex-col space-y-4 p-2">
      <p className="text-center">
        <strong>
          Chapter 6: Foundations of Business Intelligence — Databases &
          Information Management
        </strong>
      </p>
      <p>
        Source: Kenneth C. Laudon & Jane P. Laudon — Management Information
        Systems
      </p>

      <ol className="space-y-4">
        <li>
          <p>
            <strong>Purpose of the Chapter:</strong>
            <br /> The chapter explains how organizations use databases and
            business intelligence to store, manage, and analyze information to
            support decision making and improve business performance.
          </p>
        </li>

        <li>
          <p>
            <strong>Business Value of Databases:</strong>
            Databases reduce redundancy, improve data accuracy, and provide
            timely access to information for operational and strategic
            activities.
          </p>
        </li>

        <li>
          <p>
            <strong>Database Management System (DBMS):</strong>
            DBMS is software that manages creation, retrieval, updating, and
            administration of databases while allowing controlled access for
            users and applications.
          </p>
        </li>

        <li>
          <p>
            <strong>Relational Database Model:</strong> Data is stored in tables
            (relations) consisting of rows (records) and columns (fields) with
            relationships maintained via key fields.
          </p>
        </li>

        <p>
          <strong>Key Components of a Relational Database:</strong>
        </p>
        <table>
          <tbody>
            <tr>
              <td className="border border-1">
                <b>Table</b>
              </td>
              <td className="border border-1">
                Set of related data stored in rows and columns.
              </td>
            </tr>
            <tr>
              <td className="border border-1">
                <b>Record (Row)</b>
              </td>
              <td className="border border-1">Single instance of data.</td>
            </tr>
            <tr>
              <td className="border border-1">
                <b>Field (Column)</b>
              </td>
              <td className="border border-1">Attribute of data.</td>
            </tr>
            <tr>
              <td className="border border-1">
                <b>Primary Key</b>
              </td>
              <td className="border border-1">
                Unique identifier for a record.
              </td>
            </tr>
            <tr>
              <td className="border border-1">
                <b>Foreign Key</b>
              </td>
              <td className="border border-1">
                Links tables to enforce relationships.
              </td>
            </tr>
          </tbody>
        </table>

        <li>
          <p>
            <strong>Data Warehousing:</strong> Data warehouses integrate data
            from multiple sources to support business reporting and analytics
            across the organization.
          </p>
        </li>

        <li>
          <p>
            <strong>Data Marts:</strong> Specialized subsets of data warehouses
            designed for individual departments or business units.
          </p>
        </li>

        <li>
          <p>
            <strong>Big Data:</strong> Extremely large, fast-moving, and diverse
            datasets requiring advanced tools for processing and analysis.
          </p>
        </li>

        <li>
          <p>
            <strong>Business Intelligence Systems (BI):</strong> Tools and
            methodologies that analyze large volumes of data to support decision
            making.
          </p>
        </li>

        <p>
          <strong>Examples of BI Analytical Tools:</strong>
        </p>
        <table>
          <tbody>
            <tr>
              <td className="border border-1">
                <b>OLAP</b>
              </td>
              <td className="border border-1">
                Multidimensional analysis of data.
              </td>
            </tr>
            <tr>
              <td className="border border-1">
                <b>Data Mining</b>
              </td>
              <td className="border border-1">
                Identifies hidden patterns and correlations.
              </td>
            </tr>
            <tr>
              <td className="border border-1">
                <b>Predictive Analytics</b>
              </td>
              <td className="border border-1">
                Forecasts future trends and outcomes.
              </td>
            </tr>
            <tr>
              <td className="border border-1">
                <b>Machine Learning</b>
              </td>
              <td className="border border-1">
                Systems learn from data to improve predictions.
              </td>
            </tr>
          </tbody>
        </table>

        <li>
          <p>
            <strong>Data Governance:</strong>
            Policies and procedures to manage data security, quality, privacy,
            and responsible use across the organization.
          </p>
        </li>

        <li>
          <p>
            <strong>Data Quality Challenges:</strong>
            Organizations must ensure data accuracy, completeness, timeliness,
            consistency, and protect user privacy.
          </p>
        </li>

        <li>
          <p>
            <strong>Main Concept:</strong>
            Effective databases and business intelligence systems enable
            organizations to transform raw data into valuable insights that
            support operational efficiency, competitive advantage, and better
            decision making.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default Report2Component;
