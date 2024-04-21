import React from 'react'
import axios from 'axios'
import { getItem } from 'localforage';

const REVIEW_API_BASE_URL = "http://localhost:8080/api/v1/createreview";
const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: REVIEW_API_BASE_URL,
    headers: {
    "Cache-Control": "no-cache",
    "Accept-Language": "en",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:5173",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    "Authorization": window.localStorage.getItem("Auth")
    }});

class ReviewService {
    createReview(review) {
        console.log(window.localStorage.getItem("Auth"));
        return axiosInstance.post(REVIEW_API_BASE_URL, review)
    }
}

export default new ReviewService();