from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in theme36t/__init__.py
from theme36t import __version__ as version

setup(
	name="theme36t",
	version=version,
	description="Business Theme for ERPNext / Frappe",
	author="Midocean Technologies Pvt Ltd",
	author_email="sagar@midocean.tech",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
