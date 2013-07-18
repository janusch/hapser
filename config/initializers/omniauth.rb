if Rails.env.production?
  OmniAuth.config.full_host = "http://hapsch.dk/"
  Rails.application.config.middleware.use OmniAuth::Builder do
    provider :github, ENV["HAPSER_FIRSTTOKEN"], ENV["HAPSER_SECONDTOKEN"]
  end
else
  OmniAuth.config.full_host = "http://localhost:3000/"
  Rails.application.config.middleware.use OmniAuth::Builder do
    provider :github, ENV["HAPSER_FIRSTTOKEN"], ENV["HAPSER_SECONDTOKEN"]
  end
end
