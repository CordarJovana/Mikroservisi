module.exports.routes = {
  '/': { view: 'pages/homepage' },
  'POST /createNewPrijava': 'PrijavaController.createNewPrijava',
  'POST /deletePrijava': 'PrijavaController.deletePrijava',
};
