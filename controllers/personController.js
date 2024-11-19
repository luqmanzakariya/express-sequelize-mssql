const personService = require("../services/personService");
const { responseError, responseSuccess } = require("../helper/response");

const getAllPersons = async (req, res) => {
  try {
    var people = await personService.getAll();
    return responseSuccess(res, {
      status: 200,
      message: "Success get persons",
      data: people,
    });
  } catch (err) {
    return responseError(res, err);
  }
};

const getPersonsById = async (req, res) => {
  try {
    var person = await personService.findPersonById(req.params.id);

    return responseSuccess(res, {
      status: 200,
      message: "Success get persons",
      data: person,
    });
  } catch (err) {
    return responseError(res, err);
  }
};

const postCreatePersons = async (req, res) => {
  try {
    var createdPerson = await personService.createPerson(req.body);
    return responseSuccess(res, {
      status: 201,
      message: "Success create persons",
      data: createdPerson,
    });
  } catch (err) {
    return responseError(res, err);
  }
};

const putUpdatePersons = async (req, res) => {
  try {
    var exisitingPerson = await personService.findPersonById(req.params.id);

    if (!exisitingPerson) {
      return responseError(res, {
        status: 404,
        message: "Person Does not exist",
      });
    }

    let updatePayload = {
      Id: exisitingPerson?.dataValues?.Id,
      ...req.body,
    }

    var updatedPerson = await personService.updatePerson(updatePayload);
    return responseSuccess(res, {
      status: 200,
      message: "Success update persons data",
      data: updatedPerson,
    });
  } catch (err) {
    responseError(res, err);
  }
};

const deletePersons = async (req, res) => {
  try {
    var exisitingPerson = await personService.findPersonById(req.params.id);

    if (!exisitingPerson) {
      return responseError(res, {
        status: 404,
        message: "Person Does not exist",
      });
    }

    await personService.deletePerson(req.params.id);
    
    return responseSuccess(res, {
      status: 200,
      message: `person with id: ${req.params.id} is deleted successfully`,
    });

  } catch (err) {
    responseError(res, err);
  }
};

module.exports = {
  getAllPersons,
  getPersonsById,
  postCreatePersons,
  putUpdatePersons,
  deletePersons
};
