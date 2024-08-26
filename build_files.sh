# build_files.sh
# create a virtual environment named 'venv' if it doesn't already exist
python3.12 -m venv venv

# activate the virtual environment
source venv/bin/activate

python3.12 -m pip install --upgrade pip
pip install -r requirements.txt

# Create the static directories if they don't exist
mkdir -p /vercel/path0/static
mkdir -p /vercel/path0/controller/static

python3.12 manage.py collectstatic
