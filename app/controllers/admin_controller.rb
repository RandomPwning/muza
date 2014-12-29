class AdminController < ApplicationController
  before_filter :require_user
  before_filter :can_view_admin
	layout 'new_admin', :only => :index
  def menu
    @is_portal = has_role(:portal)
    @is_admin = has_role(:admin)  
    @is_read_only = has_role(:admin_read_only)  
  end  
end