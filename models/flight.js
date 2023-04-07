var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var destinationSchema = new Schema({
    arrival: { 
        type: Date
    },

    airport: {
        type: String,
        enum: [ 'ATL', 'AUS', 'DFW','DEN','LAX','SAN' ]
        },
}, {
   timestamps: true    
});

var flightSchema = new mongoose.Schema({
	airline: {
		type: String,
		enum: [ 'American', 'Southwest', 'United' ],
    },
        
    airport: {
            type: String,
            enum: [ 'ATL','DEN','AUS', 'DFW', 'LAX', 'SAN' ],
        },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date, default: function () {
            return new Date(new Date().setFullYear(new Date().getFullYear() - 1));
        }
    }, 
    destinations: [destinationSchema]
},{
    timestamps: true,
});

module.exports = mongoose.model('Flight', flightSchema);