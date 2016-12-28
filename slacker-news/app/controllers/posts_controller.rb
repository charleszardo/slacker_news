class PostsController < ApplicationController
  def index
    respond_with Post.all
  end

  def create
    post = Post.new(post_params)
    post.upvotes = 0
    post.save

    respond_with post
  end

  def show
    respond_with Post.find(params[:id])
  end

  def upvote
    post = Post.find(params[:id])
    post.increment!(:upvotes)

    respond_with post
  end

  def downvote
    post = Post.find(params[:id])
    post.decrement!(:upvotes)

    respond_with post
  end

  private
  def post_params
    params.require(:post).permit(:link, :title)
  end
end
