class V1::ThingsController < ApplicationController
    def index
        render json: {:things => [
            {
                :name => "banana",
                :guid => '543543473673'
            }
        ]}.to_json
    end
end