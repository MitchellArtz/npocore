const mongoose = require("mongoose");
const { organizationModel, postModel, passwordResetSessionModel } = require("../models");
const { hourlyBump, postBump, featureBump, referralBump, hourlyDownBump, downBumpOrganizations } = require("../nposcore-functions");

module.exports = function(app) {

  app.get("/api/get-organizations", async (req, res) => {
    const organizations = await organizationModel.find({}).sort({ npoScore: -1 });
    res.send(organizations);
  });

  app.post("/api/add-organization", (req, res) => {
    const organization = req.body;
    const newOrganization = new organizationModel({
      name: 'Calix Huang',
      email: 'calix.huang1@gmail.com',
      description: 'asdf',
      website: 'https://www.calix.dev/',
      gender: 'Male',
      cause: 'Animal Welfare',
      interests: [ 'Sponsors', 'Clients' ]
    });
    newOrganization.save((err, organization) => { if (err) throw err; });
  });

  app.get("/api/get-organization", async (req, res) => {
    const organization = organizationModel.findOne({
      email: req.query.email,
      password: req.query.password
    });

    return organization;
  });

  app.post("/api/bump", async (req, res) => {
    const organization = req.body;

    if (organization._id == req.cookies.organization._id) {
      if (!organization.bumpedInLastHour) {
        await organizationModel.findOneAndUpdate(
          { _id: organization._id },
          { npoScore: hourlyBump(organization.npoScore), bumpedInLastHour: true },
          { new: true },
          (err, organization) => {
            if (err) throw err;
          }
        )

        // RESETTING COOKIES
        res.cookie("organization", await organizationModel.findOne({ _id: organization._id }), { overwrite: true });

        res.status(200).send();
      } else {
        res.send("This organization has already been bumped in the last hour.");
      }
    } else {
      res.send("You don't have permission to bump this organization.");
    }
  });

}
