import * as util from "../../utils";

const clickSubmitApplication = async () => {
  await util.clickInputButton("Submit application");
};

const respond = async () => {
  console.log("respond to training");

  await clickSubmitApplication();

  await util.matchText("a", "You must upload your written proposal");
  await util.matchText("a", "You must add a valid phone number");
  await util.upload("file_0", "document.pdf");
  await clickSubmitApplication();

  await util.matchText("a", "You must add a valid phone number");
  await util.type("respondToPhone", { value: "0123456789" });
  await clickSubmitApplication();

  await util.matchText("h4", "Your response has been successfully submitted.");
};

export default respond;
