const table = document.querySelector("table");
const liveScore = document.querySelector(".live-score");

const url_points_table = window.env.URL1;
const url_recent_score = window.env.URL2;
const url_live_score = window.env.URL3;

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

// Links for form indicators
formIndicator = [
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2luIj4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzNBQTc1NyIgY3g9IjgiIGN5PSI4IiByPSI4Ij48L2NpcmNsZT4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSI2LjQgOS43NiA0LjMyIDcuNjggMy4yIDguOCA2LjQgMTIgMTIuOCA1LjYgMTEuNjggNC40OCI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==",
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iTG9zcyI+CiAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGZpbGw9IiNFQTQzMzUiIGN4PSI4IiBjeT0iOCIgcj0iOCI+PC9jaXJjbGU+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjAwMDAwMCwgOC4wMDAwMDApIHJvdGF0ZSgtMzE1LjAwMDAwMCkgdHJhbnNsYXRlKC04LjAwMDAwMCwgLTguMDAwMDAwKSAiIHBvaW50cz0iMTIgOC44IDguOCA4LjggOC44IDEyIDcuMiAxMiA3LjIgOC44IDQgOC44IDQgNy4yIDcuMiA3LjIgNy4yIDQgOC44IDQgOC44IDcuMiAxMiA3LjIiPjwvcG9seWdvbj4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=",
];

//Function for fetching API
function getPointsTable(url) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": window.env.API_KEY,
      "X-RapidAPI-Host": window.env.HOST,
    },
  };

  try {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.pointsTable[0].pointsTableInfo);
        //"data.pointsTable[0].pointsTableInfo" this gives the points table array
        data.pointsTable[0].pointsTableInfo.forEach((country, index) => {
          // Assigning code to render the country flag
          let code = "";
          countryCode.forEach((item) => {
            if (country.teamName == item.name) code = item.code;
          });

          // Assignong the lost value 0 for the teams that have never lost
          country.matchesLost = country.matchesLost || 0;

          // Assigning form icons
          formArray = [];
          country.form.forEach((item) => {
            item == "W"
              ? formArray.unshift(formIndicator[0])
              : formArray.unshift(formIndicator[1]);
          });

          // Rendering the table details
          table.innerHTML += `
                  <tbody>
                      <tr>
                        <td>
                            <div class=".container col-6">
                                <div class="d-inline-block mr-1" >${
                                  index + 1
                                }</div>
                                <span class="fi fi-${code} fis rounded-1"></span> 
                                <div class="d-inline-block ml-1">${
                                  country.teamName
                                }</div>
                            </div>
                          </td>
                          <td>${country.matchesPlayed}</td>
                          <td>${country.matchesWon}</td>
                          <td>${country.matchesLost}</td>
                          <td>${country.nrr}</td>
                          <td>${country.points}</td>
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
      });
  } catch (error) {
    console.error(error);
  }
}

function getRecentScore(url) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": window.env.API_KEY,
      "X-RapidAPI-Host": window.env.HOST,
    },
  };

  try {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(
          data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0]
        );

        const root =
          data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0];

        // Assigning code to render the country flag
        let code = ["", ""];
        countryCode.forEach((item) => {
          if (root.matchInfo.team1.teamSName == item.name) {
            code[0] = item.code;
          } else if (root.matchInfo.team2.teamSName == item.name) {
            code[1] = item.code;
          }
        });

        let teamNames = [
          root.matchInfo.team1.teamName,
          root.matchInfo.team2.teamName,
        ];

        let runs = [
          root.matchScore.team1Score.inngs1.runs || 0,
          root.matchScore.team2Score.inngs1.runs || 0,
        ];
        let wickets = [
          root.matchScore.team1Score.inngs1.wickets || 0,
          root.matchScore.team2Score.inngs1.wickets || 0,
        ];
        let overs = [
          root.matchScore.team1Score.inngs1.overs || 0,
          root.matchScore.team2Score.inngs1.overs || 0,
        ];

        liveScore.innerHTML = `
              <div
                class=" d-flex justify-content-between out-border container w-100 "
              >
                <div class="d-flex justify-content-between col-4">
                  <div class="d-flex flex-column align-items-center p-2 col-7">
                    <div class="fi fi-${
                      code[0]
                    } fis rounded-1 mb-1 icon-enlarge"></div>
                    <div class="">${teamNames[0]}</div>
                  </div>
                  <div class="d-flex flex-column align-items-center p-2 col-5">
                    <div class="c">${runs[0]}/${wickets[0]}</div>
                    <div class="c">(${overs[0]})</div>
                  </div>
                </div>
                <div class="p-2">Vs</div>
                <div class="d-flex justify-content-between col-4">
                  <div class="d-flex flex-column align-items-center p-2 col-5">
                    <div class="c">${runs[1]}/${wickets[1]}</div>
                    <div class="c">(${overs[1]})</div>
                  </div>
                  <div class="d-flex flex-column align-items-center p-2 col-7">
                    <div class="fi fi-${
                      code[1]
                    } fis rounded-1 mb-1 icon-enlarge"></div>
                    <div class="">${teamNames[1]}</div>
                  </div>
                </div>
              </div>

              <div
                class="out-border container d-flex flex-column justify-content-center align-items-center"
              >
              <div class="items">${root.matchInfo.status}</div>
              <div class="text-secondary">ODI ${parseInt(
                root.matchInfo.matchDesc
              )} of 48</div>
              </div>
            `;
      });
  } catch (error) {
    console.error(error);
  }
}

function getLiveScore(url) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": window.env.API_KEY,
      "X-RapidAPI-Host": window.env.HOST,
    },
  };

  try {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(
          data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0]
        );

        const root =
          data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0];

        // Assigning code to render the country flag
        let code = ["", ""];
        countryCode.forEach((item) => {
          if (root.matchInfo.team1.teamSName == item.name) {
            code[0] = item.code;
          } else if (root.matchInfo.team2.teamSName == item.name) {
            code[1] = item.code;
          }
        });

        let teamNames = [
          root.matchInfo.team1.teamName,
          root.matchInfo.team2.teamName,
        ];

        let runs = [
          root.matchScore.team1Score.inngs1.runs || 0,
          root.matchScore.team2Score || 0,
        ];
        let wickets = [
          root.matchScore.team1Score.inngs1.wickets || 0,
          root.matchScore.team2Score || 0,
        ];
        let overs = [
          root.matchScore.team1Score.inngs1.overs || 0,
          root.matchScore.team2Score || 0,
        ];

        liveScore.innerHTML = `
              <div
                class=" d-flex justify-content-between out-border container w-100 "
              >
                <div class="d-flex justify-content-between col-4">
                  <div class="d-flex flex-column align-items-center p-2 col-7">
                    <div class="fi fi-${
                      code[0]
                    } fis rounded-1 mb-1 icon-enlarge"></div>
                    <div class="">${teamNames[0]}</div>
                  </div>
                  <div class="d-flex flex-column align-items-center p-2 col-5">
                    <div class="c">${runs[0]}/${wickets[0]}</div>
                    <div class="c">(${overs[0]})</div>
                  </div>
                </div>
                <div class="p-2">Vs</div>
                <div class="d-flex justify-content-between col-4">
                  <div class="d-flex flex-column align-items-center p-2 col-5">
                    <div class="c">${runs[1]}/${wickets[1]}</div>
                    <div class="c">(${overs[1]})</div>
                  </div>
                  <div class="d-flex flex-column align-items-center p-2 col-7">
                    <div class="fi fi-${
                      code[1]
                    } fis rounded-1 mb-1 icon-enlarge"></div>
                    <div class="">${teamNames[1]}</div>
                  </div>
                </div>
              </div>

              <div
                class="out-border container d-flex flex-column justify-content-center align-items-center"
              >
                <div class="items">${root.matchInfo.status}</div>
                <div class="text-secondary">ODI ${parseInt(
                  root.matchInfo.matchDesc
                )} of 48</div>
              </div>
            `;
      });
  } catch (error) {
    console.error(error);
  }
}

// getPointsTable(url_points_table);
//getRecentScore(url_recent_score);
//getLiveScore(url_live_score);

document.querySelector(".toggle-light").addEventListener("click", (e) => {
  document.body.setAttribute("data-bs-theme", "light");
});

document.querySelector(".toggle-dark").addEventListener("click", (e) => {
  document.body.setAttribute("data-bs-theme", "dark");
});
