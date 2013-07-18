namespace :figaro do
    desc "SCP transfer figaro configuration to the shared folder"
    task :setup do
        run_locally %Q(bundle exec rails runner 'puts Figaro.env("#{rails_env}").to_yaml' > _application_.yml)
        transfer :up, "_application_.yml", "#{shared_path}/application.yml", via: :scp
        run_locally "rm _application_.yml"
    end

    desc "Symlink application.yml to the release path"
    task :finalize do
        run "ln -sf #{shared_path}/application.yml #{release_path}/config/application.yml"
    end
end
