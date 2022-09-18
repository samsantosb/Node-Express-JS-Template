function promiseError(error) {
    return {
        promiseError: {
            message: "Promise Error",
            error: error,
        },
    };
}

function invalidIdError(id) {
    return {
        invalidIdError: {
            message: "Invalid id",
            id: id,
        },
    };
}

function invalidBodyError(body) {
    return {
        InvalidBodyError: {
            message: "Invalid body",
            body: body,
        },
    };
}

module.exports = { promiseError, invalidIdError, invalidBodyError };