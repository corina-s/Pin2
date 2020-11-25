class StaticController < ApplicationController
    include ActionView::Layouts
    include ActionController::Rendering

    def index
        render 'static/index'
    end
end