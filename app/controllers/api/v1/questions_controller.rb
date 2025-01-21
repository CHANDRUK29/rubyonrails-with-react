class Api::V1::QuestionsController < ApplicationController
    protect_from_forgery with: :null_session #use to bypass the csrf token authenticity

    def index
        if params[:tags].present? && params[:tags] != 'All'
            @questions = Question.where(tag: params[:tags])
        else
            @questions = Question.all
        end
        render json: @questions, status: :ok
    end


    def updateCount
        @questions = Question.find(params[:id])
        if params[:addCountFor] == "like" 
            @questions.update(likesCount: @questions.likesCount+1)
        elsif params[:addCountFor] == "dislike"
            @questions.update(dislikesCount: @questions.dislikesCount+1)
        end
        render json: @questions, status: :ok
    end
end
