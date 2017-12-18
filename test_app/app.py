import uuid
import random

from flask import Blueprint, Flask, render_template
from flask_restplus import Api, Resource
from werkzeug.serving import run_simple

from flask_webpack import Webpack
webpack = Webpack()


def create_app(settings_override=None):
    """
    Create a test application.
    :param settings_override: Override settings
    :type settings_override: dict
    :return: Flask app
    """
    app = Flask(__name__, static_folder='static')

    params = {
        'DEBUG': True,
        'WEBPACK_MANIFEST_PATH': '../build/manifest.json'
    }

    app.config.update(params)

    if settings_override:
        app.config.update(settings_override)

    webpack.init_app(app)

    return app


app = create_app()

blueprint = Blueprint('api', __name__, url_prefix='/api')
api = Api(blueprint)
app.register_blueprint(blueprint)


@api.route('/foods')
class FoodsResource(Resource):
    def get(self):
        foods = [
            'pasta', 'artichoke', 'green beans', 'falafel', 'eggplant',
            'olives', 'cheese', 'eggs',
        ]
        return {'id': str(uuid.uuid4()), 'name': random.choice(foods)}


@app.route('/')
def index():
    return render_template('index.jinja2')


if __name__ == '__main__':
    app.run('0.0.0.0', 5000, app, use_reloader=True, use_debugger=True)
