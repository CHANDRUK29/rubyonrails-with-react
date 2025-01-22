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

    def create
        @question = Question.new(question_params)
        if @question.save
            render json: {  status: "questions created successfully", data: @question,}, status: :ok
        else
            render json: {status: "failure", error: @question.errors.full_messages, }, status: :unprocessable_entity

        end
    end


    private

    def question_params
        params.require(:question).permit(:title, :tag)
    end
end
