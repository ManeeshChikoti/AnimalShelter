import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {dogsData,catsData} from "../petsdata"
import "./table.scss";
export default function Table({handleTable}) {
  const [visible, setVisible] = useState(true);
  const [info,setInfo] =useState("dogs");
  const handleClick = () => {
    setVisible(!visible);
    handleTable();
  };
  return (
    <div className="wrapper">
      {visible && (
        <div className="tableContainer">
          <button className="close" onClick={handleClick}>
            <CloseIcon />
          </button>
          <h3>What all pets do we have ?</h3>
          <div className="buttons">
            <button className="Button" onClick={()=>{setInfo("dogs")}}>DOGS</button>
            <button className="Button" onClick={()=>{setInfo("cats")}}>CATS</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Breed</th>
                <th>Age ( months )</th>
              </tr>
            </thead>
            <tbody>
                {(info==="dogs" ? dogsData :catsData).map((item)=>{
                    return(
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.Breed} </td>
                            <td>{item.age}</td>
                        </tr>
                    )
                })

                }
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
