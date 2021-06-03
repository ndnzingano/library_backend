import connection from "../config/dbConnection"
import { IDBError, IReview, IUser } from "../utils/types"
const jwt = require('jsonwebtoken')
import {v4 as uuidv4 } from 'uuid'
import {getAllReviews, insertReview, getReviewById, getReviewByBookId, getReviewByUserId, deleteReview} from './../repository/reviewRepository'

export const getAllReviewsController = (req: any, res: any) => {
  getAllReviews((error: IDBError, reviews: IReview) => {
        if(error){
          res.status(500).json(
            {
                "Type": "There has been a database error!",
                "Message": error.sqlMessage,
                "Query": error.sql
            })     
        }
        else {
          res.status(200).json({"reviews": reviews})
        }
    })
};

export const insertReviewController = (req:any, res:any) => {    
    const review = req.body;
    review.id = uuidv4();
    
    insertReview(review, (error: IDBError, savedReview: IReview) => {
        if(error){
            res.status(500).json(
                {
                    "Type": "There has been a database error!",
                    "Message": error.sqlMessage,
                    "Query": error.sql
                })
        }
        else {
          res.status(201).json({
            "status":201,
            "result":savedReview
          })  
        }
    })
};

export const getReviewByIdController = (req: any, res: any) => {
  const id = req.params.id;
  getReviewById(id, (error: any, review: IReview) => {
      if(error){
        res.status(error.status).json(error)

      }
      else {
        res.status(200).json({
          "status": 200,
          "result": review
        })     
      }
  })
};

export const getReviewByQueryController = (req: any, res: any) => {  
    if(req.query.book){
        const book = req.query.book;

        getReviewByBookId(book, (err: any, review: IReview) => {
            if(err){
                res.status(err.status).json(err);
            }
            else {
              res.status(200).json({
                "status": 200,
                "result": review
              })  
            }
        });
    }
    else if(req.query.user) {
      const user = req.query.user;

      getReviewByUserId(user, (err: any, review: IReview) => {
          if(err){
              res.status(err.status).json(err);
          }
          else {
            res.status(200).json({
              "status": 200,
              "result": review
            })  
          }
      });
    }
    else{
      res.status(400).json({
        "status": 400, 
        "message":"There has been a problem with the query, check the information provided"
      })
    }
};

export const updateReviewController = (req:any, res:any) => {
    const id = req.params.id;
    const review: IReview = req.body;

    const sql = `UPDATE reviews SET book=?, user=?, startDate=?, finishDate=?, rating=?, review=? WHERE id=?`;
    connection.query(sql, [review.book, review.user, review.startDate, review.finishDate, review.rating, review.review, id], (error, rows) => {
        if(error){
          res.status(error.code).json(
            {
              "Type": "There has been a database error!",
              "Code": error.code,
              "Message": error.sqlMessage,
              "Query": error.sql          
          })
        }
        else {
          res.status(201).json({
            "status":201,
            "result": review
          })
        }
    })
}

export const deleteReviewController = (req:any, res:any) => {
  const id = req.params.id;    
  getReviewById(id, (error: any, review: IReview) => {
      if(error){
        res.status(error.status).json(
          {
            "Type": "There has been a network error!",
            "Status": error.status,
            "Message": error.message
          })
      }
      else {
        deleteReview(id, (error: any, id: string) => {
          if(error){
            res.status(error.status).json(
              {
                "Type": "There has been a network error!",
                "Status": error.status,
                "Message": error.message
              })
          }
          else {
            res.status(204).json({
              'status': 204,
              'result': review
            })       
          }        
        })
      }
    })
}

