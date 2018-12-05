const Sequelize = require("sequelize");

// Creates a Proposal
module.exports = (sequelize, DataTypes) => {
  const Proposal = sequelize.define("Proposal", {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    proposalTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    proposalBid: DataTypes.INTEGER,
    proposalDetails: DataTypes.STRING,
    isTaken: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      type: DataTypes.DATE,
      //   defaultValue: equelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE, //"TIMESTAMP",
      //   defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false
    }
  });

  //   Proposal.associate = function(models) {
  //     // Associating Proposal with any table in the future
  //     Proposal.hasMany(models.<table>, {
  //       onDelete: "cascade"
  //     });
  //   };

  // Syncs with DB
  Proposal.sync().then(function() {
    console.log("mySQL Database is synchronized.");
  });

  return Proposal;
};
