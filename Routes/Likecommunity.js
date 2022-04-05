/**
 * Created by rv2016 on 28/10/16.
 */


'use strict';

const Boom = require('boom');
const uuid = require('node-uuid');
const Joi = require('joi');
const jwt = require('hapi-auth-jwt2');
const relish = require('relish')({

    stripQuotes:true,
    messages    :{
        email   :   'Please provide valid email address.'

    }
});


//  Local Files and Modules Import

var merchantModel  = require('../Models/merchant').MerchantModel;

let handler_Merchant = require('../Handlers/Merchant/merchant').funcs_m;
let handler_User = require('../Handlers/User').funcs_u;
let handler_Generic = require('../Handlers/yummzHandlers');
let handler_LikeCommunity    =   require('../Handlers/Likecommunity').funcs_likecommunity;

let baseResponses   =   require('./Responses');
let commonValidations   =   baseResponses.commonSchemas;
let responseByCodes =   baseResponses.menuitems;//require('./Responses').menuitems;   // Responses by HTTP Status Codes for all routes in this file

//  props

//  Routes and handlers
var arrRoutes= [

/*    {
        method: 'GET',
        path: '/api/user/LikeCommunity/getAll/{user_id}',
        handler: handler_LikeCommunity.getLikeCommunityByUserId,
        config  :   {
            //auth:   'token',
            description: 'user get all like community by user id.',
            notes: 'Test APi',
            tags: ['api','sa','user'], // ADD THIS TAG
            validate    :   {
                failAction  :   relish.failAction,
                params  :   Joi.object().keys({
                   user_id    :  Joi.string()
                })
            }
        }
    },*/

/*    {
        method: 'GET',
        path: '/api/user/LikeCommunity/get/{_id}',
        handler: handler_LikeCommunity.getLikeCommunity,
        config  :   {
            //auth:   'token',
            description: 'user get LikeCommunity.',
            notes: 'Test APi',
            tags: ['api','sa','user'], // ADD THIS TAG
            validate    :   {
                failAction  :   relish.failAction,
                params  :   Joi.object().keys({
                   _id    :  Joi.string()
                })
            }
        }
    },*/

    {
        method: 'POST',
        path: '/api/user/LikeCommunity/add',
        handler: handler_LikeCommunity.addLikeCommunity,
        config  :   {
            //auth:   'token',
            description: 'user add LikeCommunity.',
            notes: 'Test APi',
            tags: ['api','sa','user'], // ADD THIS TAG
            validate    :   {
                failAction  :   relish.failAction,
                payload :   Joi.object().keys({

                    community_id        :   Joi.string(),
                    user_id        :   Joi.string(),
                    //description        :   Joi.string(),
                    }).optional()
            }
        }
    },

/*    {
        method: 'POST',
        path: '/api/user/LikeCommunity/modify/{_id}',
        handler: handler_LikeCommunity.modifyLikeCommunity,
        config  :   {
            //auth:   'token',
            description: 'user modify LikeCommunity.',
            notes: 'Test APi',
            tags: ['api','sa','user'], // ADD THIS TAG
            validate    :   {
                failAction  :   relish.failAction,
                payload :   Joi.object().keys({
                    startDate        :   Joi.string(),
                    endDate          :   Joi.string(),
                    startTime        :   Joi.string(),
                    endTime          :   Joi.string(),
                    course_objective :   Joi.string(),
                    methodology      :   Joi.string(),
                    duration         :   Joi.string(),
                    registration_fee :   Joi.string(),
                    pre_requisites   :   Joi.string(),
                    about_instructor :   Joi.string(),
                }),
                params  :   Joi.object().keys({
                   _id    :  Joi.string()
                })
            }
        }
    },*/

/*   {
        method: 'DELETE',
        path: '/api/user/LikeCommunity/delete/{_id}',
        handler: handler_LikeCommunity.deleteLikeCommunity,
        config  :   {
            //auth:   'token',
            description: 'user delete LikeCommunity.',
            notes: 'Test APi',
            tags: ['api','sa','user'], // ADD THIS TAG
            validate    :   {
                failAction  :   relish.failAction,
                params  :   Joi.object().keys({
                   _id    :  Joi.string()
                })
            }
        }
    }*/
];





exports.register = function(server, options, next) {

    const db = server.app.db;

    return next();
};

exports.register.attributes = {
    name: 'routes-likecommunity',
    routes: arrRoutes
};
