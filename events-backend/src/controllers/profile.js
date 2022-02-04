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
}

const getProfileByAccountId = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await knex("profile")
      .join("accounts", "accounts.id", "profile.account_id")
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
      )
      .where({ account_id: id });
      res.status(200).json({
        msg: "Profile fetched successfully",
        status: true,
        profile: data,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: `An error occurred while fetching the data of the account id ${id}`,
      status: false,
    });
  }
};

const updateProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await knex("profile").where({ id: id }).update({
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
        msg: `Profile with an id of ${id} is updated successfully`,
        status: true,
        profile: data,
      });
    })
    .catch(() => {
      res.json("Something went wrong.")
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: `An error occurred while updating the profile with id ${id}`,
      status: false,
    });
  }
}

const deleteProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await knex("profile").where({ id: id }).del();
    res.status(200).json({
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
  updateProfile,
  deleteProfile,
}