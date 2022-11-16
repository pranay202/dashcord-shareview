import { Attendances } from "@prisma/client";
import Table from "components/Tables/AttendanceTable";
import attendanceColors from "components/AttendanceColor";
import moment from "moment";

const ViewMaterial = ({ attendances }: ViewMaterialProps) => {
  return (
    <div className="w-screen h-screen bg-slate-100 p-10 flex flex-col items-center">
      <h1 className="m-2 font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Web Development</h1>
      <p className="text-lg text-gray-500">(Explore the content level by level given by <strong>Pranay Kharabe</strong>)</p>
      <div className='m-2 w-3/4'>
          <table className="my-10 bg-white" style={{width: '100%',}}>
            <tr>
              <th style={{width: '10%',}} className="font-semibold text-lg border border-black rounded">Levels</th>
              <th style={{width: '30%',}} className="font-semibold text-lg border border-black rounded">Topic</th>
              <th style={{width: '30%',}} className="font-semibold text-lg border border-black rounded">Link</th>
              <th style={{width: '30%',}} className="font-semibold text-lg border border-black rounded">Alternative</th>
            </tr>
            <tr className="text-center">
              <td className=" border border-black rounded">Level 1</td>
              <td className=" border border-black rounded">Html & CSS</td>
              <td className="text-blue-500 hover:underline border border-black rounded"><a href="https://youtube.com/codewithharry" target="_blank" rel="noopener">https://youtube.com/codewithharry</a></td>
              <td className="text-blue-500 hover:underline border border-black rounded"><a href="https://youtube.com/codewithharry" target="_blank" rel="noopener">https://youtube.com/codewithharry</a></td>
            </tr>
            <tr className="text-center">
              <td className=" border border-black rounded">Level 2</td>
              <td className=" border border-black rounded">Javascript</td>
              <td className="text-blue-500 hover:underline border border-black rounded"><a href="https://youtube.com/codewithharry" target="_blank" rel="noopener">https://youtube.com/codewithharry</a></td>
              <td className="text-blue-500 hover:underline border border-black rounded"><a href="https://youtube.com/codewithharry" target="_blank" rel="noopener">https://youtube.com/codewithharry</a></td>
            </tr>
            <tr className="text-center">
              <td className=" border border-black rounded">Level 3</td>
              <td className=" border border-black rounded">React.js</td>
              <td className="text-blue-500 hover:underline border border-black rounded"><a href="https://youtube.com/codewithharry" target="_blank" rel="noopener">https://youtube.com/codewithharry</a></td>
              <td className="text-blue-500 hover:underline border border-black rounded"><a href="https://youtube.com/codewithharry" target="_blank" rel="noopener">https://youtube.com/codewithharry</a></td>
            </tr>
            <tr className="text-center">
              <td className=" border border-black rounded">Level 4</td>
              <td className=" border border-black rounded">Redux</td>
              <td className="text-blue-500 hover:underline border border-black rounded"><a href="https://youtube.com/codewithharry" target="_blank" rel="noopener">https://youtube.com/codewithharry</a></td>
              <td className="text-blue-500 hover:underline border border-black rounded"><a href="https://youtube.com/codewithharry" target="_blank" rel="noopener">https://youtube.com/codewithharry</a></td>
            </tr>
            <tr className="text-center">
              <td className=" border border-black rounded">Level 5</td>
              <td className=" border border-black rounded">Node.js</td>
              <td className="text-blue-500 hover:underline border border-black rounded"><a href="https://youtube.com/codewithharry" target="_blank" rel="noopener">https://youtube.com/codewithharry</a></td>
              <td className="text-blue-500 hover:underline border border-black rounded"><a href="https://youtube.com/codewithharry" target="_blank" rel="noopener">https://youtube.com/codewithharry</a></td>
            </tr>           
            <tr className="text-center">
              <td className=" border border-black rounded">Level 6</td>
              <td className=" border border-black rounded">MongoDB</td>
              <td className="text-blue-500 hover:underline border border-black rounded"><a href="https://youtube.com/codewithharry" target="_blank" rel="noopener">https://youtube.com/codewithharry</a></td>
              <td className="text-blue-500 hover:underline border border-black rounded"><a href="https://youtube.com/codewithharry" target="_blank" rel="noopener">https://youtube.com/codewithharry</a></td>
            </tr>           
          </table>
        {/* ))} */}
      {/* </Table> */}
      </div>
    </div>
  );
};

export default ViewMaterial;

type ViewMaterialProps = {
  attendances: Attendances[];
};
