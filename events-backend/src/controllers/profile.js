const knex = require('../../db/knex');

const createProfile = (req, res) => {
  knex("profile").insert({
    phone: req.body.phone,
    location: req.body.location,
    website: req.body.website,
    facebook: req.body.facebook,
    twitter: req.body.twitter,
    instagram: req.body.instagram,
    linkedIn: req.body.linkedIn,
    about: req.body.about,
    photo: req.file.path,
    account_id: req.body.account_id,
  })
  .returning("*")
  .then((data) => {
    res.status(200).json({
      msg: "Profile created successfully",
      status: true,
      profile: data,
    });
  })
  .catch((err) => {
    res.status(500).json({
      msg: "An error occurred while creating the profile",
      status: false,
      error: err.detail
    });
  })
};

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
      console.log(data);
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

const serviceProfile = async (req, res) => {
  try {
    const data = await knex("profile")
      .join("services", "services.account_id", "profile.account_id")
      .join("accounts", "accounts.id", "profile.account_id")
      .select(
        "profile.phone",
        "services.account_id",
        "services.name",
        "services.description",
        "profile.account_id as profile_id",
        "accounts.name as account_name",
        "accounts.email as account_email",
      );
    if(data) {
      res.status(200).json({
        msg: `Profile of the services fetched successfully`,
        status: true,
        services: data,
      });
    } else {
      res.status(404).json({
        msg: `Profile of the services is not found`,
        status: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: `An error occurred while fetching the profile of the services`,
      status: false,
      error: error
    });
  }
};

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
  serviceProfile,
  getAllProfiles,
  getProfileByAccountId,
  updateProfile,
  updateProfilePhoto,
  deleteProfile,
}