import * as React from "react";
// import FormContainer from "../FormContainer/FormContainer";
import { UrlData } from "../../interface/UrlData";
import { serverUrl } from "../../helpers/Constants";
import { Link } from "react-router-dom";

interface IDataTableProps {
  data: UrlData[];
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
  const { data } = props;
  console.log("Data in DataTable is: ", data);

  const renderTableData = () => {
    return data.map((item) => {
      return (
        <tr
          key={item._id}
          className="border-b text-white bg-gray-600 hover:bg-white hover:text-gray-800"
        >
          <td className="px-6 py-3 break-words">
            <Link to={item.fullUrl} target="_blank" rel="noreferer noopner">
              {item.fullUrl}
            </Link>
          </td>
          <td className="px-6 py-3 break-words">
            <Link
              to={`${serverUrl}/shortUrl/${item.shortUrl}`}
              target="_blank"
              rel="noreferer noopner"
            >
              {item.shortUrl}
            </Link>
          </td>
          <td className="px-6 py-3">{item.clicks}</td>
          <td className="px-6 py-3"></td>
        </tr>
      );
    });
  };

  return (
    <div className="conatiner mx-auto pt-2 pb-10">
      <div className="relative overflow-x-auto shadow-sm:rounded-lg">
        <table className="w-full table-fixed text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-md uppercase text-gray-50 bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 w-6/12">
                FullUrl
              </th>
              <th scope="col" className="px-6 py-3 w-3/12">
                ShortUrl
              </th>
              <th scope="col" className="px-6 py-3 ">
                Clicks
              </th>
              <th scope="col" className="px-6 py-3 ">
                Action
              </th>
              {/* <th scope="col" className="px-6 py-3 w-6/12">FullUrl</th> */}
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
    </div>
  );
};
export default DataTable;
