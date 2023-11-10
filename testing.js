const table = document.querySelector("table");

document.querySelector(".toggle-light").addEventListener("click", (e) => {
  document.body.setAttribute("data-bs-theme", "light");
});

document.querySelector(".toggle-dark").addEventListener("click", (e) => {
  document.body.setAttribute("data-bs-theme", "dark");
});

const url = window.env.URL;

// To render the country flag
let countryCode = [
  { name: "IND", code: "in" },
  { name: "RSA", code: "za" },
  { name: "AUS", code: "au" },
  { name: "NZ", code: "nz" },
  { name: "PAK", code: "pk" },
  { name: "AFG", code: "af" },
  { name: "BAN", code: "bd" },
  { name: "ENG", code: "gb" },
  { name: "NED", code: "nl" },
  { name: "SL", code: "lk" },
];

// Links for form icons
formIndicator = [
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2luIj4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzNBQTc1NyIgY3g9IjgiIGN5PSI4IiByPSI4Ij48L2NpcmNsZT4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSI2LjQgOS43NiA0LjMyIDcuNjggMy4yIDguOCA2LjQgMTIgMTIuOCA1LjYgMTEuNjggNC40OCI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==",
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iTG9zcyI+CiAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGZpbGw9IiNFQTQzMzUiIGN4PSI4IiBjeT0iOCIgcj0iOCI+PC9jaXJjbGU+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjAwMDAwMCwgOC4wMDAwMDApIHJvdGF0ZSgtMzE1LjAwMDAwMCkgdHJhbnNsYXRlKC04LjAwMDAwMCwgLTguMDAwMDAwKSAiIHBvaW50cz0iMTIgOC44IDguOCA4LjggOC44IDEyIDcuMiAxMiA3LjIgOC44IDQgOC44IDQgNy4yIDcuMiA3LjIgNy4yIDQgOC44IDQgOC44IDcuMiAxMiA3LjIiPjwvcG9seWdvbj4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=",
];

function testing() {
  let data = [
    {
      name: "IND",
      notation: "in",
      match: 8,
      win: 8,
      loss: 8 - 8,
      pts: 8 * 2,
      form: ["W", "W", "L", "W", "L"],
    },
    {
      name: "SA",
      notation: "za",
      match: 8,
      win: 6,
      loss: 8 - 6,
      pts: 6 * 2,
      form: ["W", "W", "L", "W", "L"],
    },
    {
      name: "AUS",
      notation: "au",
      match: 8,
      win: 6,
      loss: 8 - 6,
      pts: 6 * 2,
      form: ["W", "W", "L", "W", "L"],
    },
    {
      name: "NZ",
      notation: "nz",
      match: 8,
      win: 5,
      loss: 8 - 5,
      pts: 5 * 2,
      form: ["W", "W", "L", "W", "L"],
    },
    {
      name: "IND",
      notation: "in",
      match: 8,
      win: 8,
      loss: 8 - 8,
      pts: 8 * 2,
      form: ["W", "W", "L", "W", "L"],
    },
    {
      name: "SA",
      notation: "za",
      match: 8,
      win: 6,
      loss: 8 - 6,
      pts: 6 * 2,
      form: ["W", "W", "L", "W", "L"],
    },
    {
      name: "AUS",
      notation: "au",
      match: 8,
      win: 6,
      loss: 8 - 6,
      pts: 6 * 2,
      form: ["W", "W", "L", "W", "L"],
    },
    {
      name: "NZ",
      notation: "nz",
      match: 8,
      win: 5,
      loss: 8 - 5,
      pts: 5 * 2,
      form: ["W", "W", "L", "W", "L"],
    },
    {
      name: "IND",
      notation: "in",
      match: 8,
      win: 8,
      loss: 8 - 8,
      pts: 8 * 2,
      form: ["W", "W", "L", "W", "L"],
    },
    {
      name: "SA",
      notation: "za",
      match: 8,
      win: 6,
      loss: 8 - 6,
      pts: 6 * 2,
      form: ["W", "W", "L", "W", "L"],
    },
    {
      name: "AUS",
      notation: "au",
      match: 8,
      win: 6,
      loss: 8 - 6,
      pts: 6 * 2,
      form: ["W", "W", "L", "W", "L"],
    },
    {
      name: "NZ",
      notation: "nz",
      match: 8,
      win: 5,
      loss: 8 - 5,
      pts: 5 * 2,
      form: ["W", "W", "L", "W", "L"],
    },
  ];

  data.forEach((country, index) => {
    formArray = [];
    country.form.forEach((item) => {
      item == "W"
        ? formArray.push(formIndicator[0])
        : formArray.push(formIndicator[1]);
    });
    table.innerHTML += `
                    <tbody>
                        <tr>
                            <td>
                                <div id="zero" class=".container col-6">
                                    <div class="d-inline-block mr-1" >${
                                      index + 1
                                    }</div>
                                    <span class="fi fi-${
                                      country.notation
                                    } fis rounded-1"></span> 
                                    <div class="d-inline-block ml-1">${
                                      country.name
                                    }</div>
                                </div>
                            </td>
                            <td>${country.match}</td>
                            <td>${country.win}</td>
                            <td>${country.loss}</td>
                            <td>3.152</td>
                            <td>${country.pts}</td>
                            <td>
                              <img src=${formArray[0]}>
                              <img src=${formArray[1]}>
                              <img src=${formArray[2]}>
                              <img src=${formArray[3]}>
                              <img src=${formArray[4]}>
                            </td>
                        </tr>
                    </tbody>
                `;
  });
}

testing();
