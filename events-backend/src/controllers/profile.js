const knex = require('../../db/knex');
const { IPinfoWrapper, LruCache } = require("node-ipinfo");

const token = process.env.TOKEN;

const cache = new LruCache({ max: 5000, maxAge: 1000 * 60 * 60 * 24 });
const ipInfo =  new IPinfoWrapper( token, cache );

const createProfile = async (req, res) => {
  const info = await ipInfo.lookupIp("");
  try {
    const data = await knex("profile").insert({
      phone: req.body.phone,
      location: info.city,
      website: req.body.website,
      facebook: req.body.facebook,
      twitter: req.body.twitter,
      instagram: req.body.instagram,
      linkedIn: req.body.linkedIn,
      about: req.body.about,
      photo: req.file.path,
      account_id: req.body.account_id,
      region: info.region,
      country: info.country,
      timezone: info.timezone,
    })
    .returning("*");
    if (data) {
      res.status(200).json({
        msg: "Profile created successfully",
        status: true,
        profile: data,
      });
    } else {
      res.status(500).json({
        msg: "An error occurred while creating the profile",
        status: false,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

const getAllProfiles = async (req, res) => {
  try {
    const data = await knex("profile")
    res.status(200).json({
      msg: "Profiles fetched successfully",
      status: true,
      profiles: data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "An error occurred while fetching the data",
      status: false,
      error: err
    });
  }
};


const getProfileByAccountId = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await knex("profile")
      .join("accounts", "accounts.id", "profile.account_id")
      .join("services", "services.account_id", "profile.account_id")
      .select(
        "profile.id",
        "profile.phone",
        "profile.location",
        "profile.website",
        "profile.facebook",
        "profile.twitter",
        "profile.instagram",
        "profile.linkedIn",
        "profile.about",
        "profile.photo",
        "profile.account_id",
        "accounts.name",
        "accounts.email",
        "services.name as service_name",
        "services.id as service_id",
        "services.name as service_name",

      )
      .where({ "profile.account_id" : id });
      if(data.length === 0) {
        res.status(404).json({
          msg: `Profile with an id of ${id} is not found`,
          status: false,
          profile: [],
        });
      };
      res.status(200).json({
        msg: "Profile fetched successfully",
        status: true,
        profile: data[0],
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: `An error occurred while fetching the data of the account id ${id}`,
      status: false,
    });
  }
};

const getProfileByServiceId = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await knex("profile")
      .join("services", "services.account_id", "profile.account_id")
      .join("accounts", "accounts.id", "profile.account_id")
      .select(
        "profile.phone",
        "services.account_id",
        "services.name",
        "services.id",
        "accounts.name as account_name",
        "accounts.email as account_email",
      )
      .where({ "services.id" : id })
      .first();
      if(data) {
        res.status(200).json({
          msg: "Profile fetched successfully",
          status: true,
          serviceProfile: data,
        });
      } else {
        res.status(404).json({
          msg: `Profile of a service with an id of ${id} is not found`,
          status: false,
          serviceProfile: [],
        });
      }
  } catch (error) {
    res.status(500).json({
      msg: `An error occurred while fetching the profile of a service with an id ${id}`,
      status: false,
      error: error
    });
  }
};

const getProfileByServices = async (req, res) => {
  try {
    const data = await knex("profile")
      .join("services", "services.account_id", "profile.account_id")
      .join("accounts", "accounts.id", "profile.account_id")
      .select(
        "profile.phone",
        "services.account_id",
        "services.name",
        "accounts.name as account_name",
        "accounts.email as account_email",
      );
      if(data) {
        res.status(200).json({
          msg: "Profiles fetched successfully",
          status: true,
          profiles: data,
        });
      } else {
        res.status(404).json({
          msg: "No profiles found",
          status: false,
          profiles: [],
        });
      }
  } catch (error) {
    res.status(500).json({
      msg: "An error occurred while fetching the data",
      status: false,
      error: error
    });
  }
}

const updateProfile = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const profile = await knex("profile").where({id}).update(data);
    if(profile) {
      res.status(200).json({
        msg: `Profile with an id of ${id} is updated successfully`,
        status: true,
        profile: data,
      });
    } else {
      res.status(404).json({
        msg: `Profile with an id of ${id} is not found`,
        status: false,
      });
    }
  } catch(error) {
    console.log(error);
    res.status(500).json({
      msg: `An error occurred while updating the profile with id ${id}`,
      status: false,
      error: error
    });
  }
};

const updateProfilePhoto = async (req, res) => {
  const { id } = req.params;
  const photo = req.file.path;
  try {
    const updatePhoto = await knex("profile").where({ id }).update({photo: photo});
    if(updatePhoto) {
      res.status(200).json({
        msg: `Profile with an id of ${id} is updated successfully`,
        status: true,
        profile: photo,
      });
    } else {
      res.status(404).json({
        msg: `Profile with an id of ${id} is not found`,
        status: false,
      });
    }
  } catch(error) {
    res.status(500).json({
      msg: `An error occurred while updating the profile with id ${id}`,
      status: false,
      error: error
    });
  }
}

const deleteProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await knex("profile").where({ id: id }).del();
    res.status(204).json({
      msg: `Profile with an id of ${id} is deleted successfully`,
      status: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: `An error occurred while deleting the profile with id ${id}`,
      status: false,
    });
  }
};

module.exports = {
  createProfile,
  getAllProfiles,
  getProfileByAccountId,
  getProfileByServiceId,
  getProfileByServices,
  updateProfile,
  updateProfilePhoto,
  deleteProfile,
}