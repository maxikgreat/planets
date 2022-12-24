const baseUrl = "http://localhost:3001";

function httpGetPlanets() {
  return fetch(`${baseUrl}/planets`).then((response) => response.json());
}

async function httpGetLaunches() {
  return fetch(`${baseUrl}/launches`).then((response) => response.json());
}

async function httpSubmitLaunch(launch) {
  return fetch(`${baseUrl}/launches`, {
    method: "post",
    body: JSON.stringify(launch),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function httpAbortLaunch(id) {
  return fetch(`${baseUrl}/launches/${id}`, {
    method: "delete",
  });
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
