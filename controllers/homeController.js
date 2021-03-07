const axios = require('axios');
const baseUrl = 'https://public-api.tracker.gg/v2/apex/standard';

exports.getHomeView = async (req, res, next) => {
  if(req.query.view){
    try {
      const fetchedData = await axios.get(`${baseUrl}/profile/origin/Einzweil`, {
        headers: {
          'TRN-Api-Key': 'ca6f2fbc-4a54-422f-86a0-aa2950f4fb33' 
        }
      })
      // console.log(fetchedData.data.data.segments[1].metadata.name);
      return res.render('home/home', {
        data: fetchedData.data.data.segments,
        view: true
      });
    } catch (err) {
      console.error(err);
    }
  }
  return res.render('home/home', {
    data: null,
    view: false
  })
}