# What ports/sockets to listen on, and what options for them.
listen "/srv/hapsch.dk/sockets/unicorn.sock", :backlog => 64

working_directory '/srv/hapsch.dk/app/current'

# What the timeout for killing busy workers is, in seconds
timeout 30

# Whether the app should be pre-loaded
preload_app true

# How many worker processes
worker_processes 2



# What to do before we fork a worker
before_fork do |server, worker|
  defined?(ActiveRecord::Base) and ActiveRecord::Base.connection.disconnect!
end

# What to do after we fork a worker
after_fork do |server, worker|
  defined?(ActiveRecord::Base) and ActiveRecord::Base.establish_connection
end

# Where to drop a pidfile
pid '/srv/hapsch.dk/app/shared/pids/unicorn.pid'

# Where stderr gets logged
stderr_path '/srv/hapsch.dk/app/shared/log/unicorn.stderr.log'

# Where stdout gets logged
stdout_path '/srv/hapsch.dk/app/shared/log/unicorn.stdout.log'
