const messageModel = require("../Models/messageModel");

// createriessage

const createMessage = async (req, res) => {
    const { chatId, senderId, text } = req.body;

    const message = new messageModel ({
        chatid,
        senderld,
        text,
    });
    try {
        const response = await message ,save();
        res.status (200). json (response);
    } catch (error) {
        console. Log (error);
        res. status (500) . json (error);
    }
};

// getMessages

const getMessages = osync (reg, res) => {
    const { chatId } = req.params;

    try {
        const messages = await messageModel.find({ chatId }) ;
        res.status (200).json(messages);
    } catch (error) {
        console.log (error);
        res.status (500).json (error);   
    }
};

module.exports = { createMessage, getMessages};
