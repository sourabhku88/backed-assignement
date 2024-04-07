class Responses {
    /**
     * @author `Sourabh`
     * @function success res 
     * @returns status:200,msg:'all ok!',result:[]
     */
    succes(res, msg = 'All ok!', result = []) {
        return res.status(200).send({ status: true, msg, result })
    }
    /**
     * @author `Sourabh`
     * @function client error res 
     * @returns status:400,msg:'data incorrect!',result:[]
     */
    clientError(res, msg = 'data incorrect!', result = []) {
        return res.status(400).send({ status: false, msg, result })
    }
    /**
     * @author `Sourabh`
     * @function not fount error res 
     * @returns status:404,msg:'Data not Found!',result:[]
     */
    notFound(res, msg = 'Data not Found!', result = []) {
        return res.status(404).send({ status: false, msg, result })
    }
    /**
     * @author `Sourabh`
     * @function un authantication error res 
     * @returns status:401,msg:'not unauthorized!!',result:[]
     */
    unAuth(res, msg = 'not unauthorized!', result = []) {
        return res.status(401).send({ status: false, msg, result })
    }
    /**
     * @author `Sourabh`
     * @function server error res 
     * @returns status:500,msg:'Something went wrong!',result:[]
     */
    server(res, msg = 'Something went wrong!', result = []) {
        return res.status(500).send({ status: false, msg, result })
    }
}

module.exports = new Responses();