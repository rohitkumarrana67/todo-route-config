// import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@rohit-microfrontend/navbar",
//   app: () => System.import("@rohit-microfrontend/navbar"),
//   activeWhen: ["/"]
// });



// start({
//   urlRerouteOnly: true,
// });


import { registerApplication, start} from 'single-spa';
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout';


const routes = constructRoutes(document.querySelector('#single-spa-layout'));
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });
applications.forEach(registerApplication);
start();

