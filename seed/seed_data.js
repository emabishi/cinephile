const movies = [
  {
    title: 'Black Panther',
    cinemas: [ 
      { name: 'Imax 3D The Junction',
        price: '1000',
        showing_at: [{
          date: '22/05/2018',
          time: '08:00',
          seats_left: '45'
        }, {
          date: '22/05/2018',
          time: '11:00',
          seats_left: '105'
        }, {
          date: '23/05/2018',
          time: '00:00',
          seats_left: '200'
        }],
        release_year: '2018'
      },
      { name: 'Megadome',
        price: '800',
        showing_at: [{
          date: '23/05/2018',
          time: '09:00',
          seats_left: '23'
        }, {
          date: '24/05/2018',
          time: '12:00',
          seats_left: '100'
        }]
      }
    ],
    length: '2h30m',
    release_year: '2018'
  },
  {
    title: 'Avengers Infinity War',
    cinemas: [{
        name: 'Imax 3D The Junction',
        price: '1000',
        showing_at: [{
          date: '23/04/2018',
          time: '08:00',
          seats_left: '35'
        }, {
          date: '23/04/2018',
          time: '11:00',
          seats_left: '125'
        }, {
          date: '25/04/2018',
          time: '00:00',
          seats_left: '80'
        }],
        release_year: '2018'
      },
      {
        name: 'Megadome',
        price: '1800',
        showing_at: [{
          date: '23/05/2018',
          time: '09:00',
          seats_left: '23'
        }, {
          date: '24/05/2018',
          time: '12:00',
          seats_left: '100'
        }]
      }
    ],
    release_year: '2018',
    length: '1h30m'
  },
  {
    title: 'Aquaman',
    cinemas: [{
        name: 'Imax 3D The Junction',
        price: '1000',
        showing_at: [{
          date: '14/12/2018',
          time: '08:00',
          seats_left: '45'
        }, {
          date: '15/12/2018',
          time: '11:00',
          seats_left: '105'
        }, {
          date: '18/12/2018',
          time: '00:00',
          seats_left: '200'
        }],
        release_year: '2018'
      },
      {
        name: 'Megadome',
        price: '800',
        showing_at: [{
          date: '23/05/2018',
          time: '09:00',
          seats_left: '23'
        }, {
          date: '24/05/2018',
          time: '12:00',
          seats_left: '100'
        }]
      }
    ],
    release_year: '2018',
    length: '2h'
  }
]


module.exports = { movies };