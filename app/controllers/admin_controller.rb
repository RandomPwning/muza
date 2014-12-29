class Admin::AdminController < ApplicationController

  layout "admin"
  before_filter :can_view_admin
  def index

  end
end