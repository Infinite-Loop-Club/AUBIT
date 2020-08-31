import React from "react";

// inorder to pass html elements as values we need to import react

const data = {
  header: ["Designation ", "Name"],
  values: [
    ["Warden/Dean ", "Dr.T. Senthil Kumar"],
    ["Executive Warden ", "Dr.M.Gopinath"],
    ["Deputy Wardens for Boys Hostel ",
      <>
        <p>Dr.S.Moscow</p>
        <p>Mr.C.Sathya Narayanamoorthy</p>
        <p>Mr.N.S.Pradeep</p>
        <p>Mr.Pon.Azhagiri</p>
      </>
    ],
    ["Deputy Wardens for Girls Hostel ",
      <>
        <p>Mrs. G. Annapoorani</p>
        <p>Ms. S. Geetha</p>
        <p>Ms. N. Viveka priya</p>
      </>
    ],
    ["Boys Hostel Administrative Staff Members",
      <>
        <p>Mr.V.Sivakumar</p>
        <p>Mr.M.Muthukumar</p>
        <p>Mr.Y.Neildurai</p>
        <p>Mr.R.Pazhanishami</p>
      </>
    ],
    ["Girls Hostel Administrative Staff Members",
      <>
        <p>Mrs.G.Kavitha</p>
        <p>Mrs.C.Poongodi</p>
        <p>Ms.N.Dhanam</p>
      </>
    ]
  ]
}


export { data };